import Head from 'next/head';
import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

export default function Home({ products, categories }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(0);

  const initialMax = useMemo(() => {
    if (!products || products.length === 0) return 0;
    return Math.ceil(Math.max(...products.map(p => p.price)));
  }, [products]);

  if (maxPrice === 0 && initialMax > 0) {
    setMaxPrice(initialMax);
  }

  const filtered = products.filter(p => {
    if (category !== 'all' && p.category !== category) return false;
    if (!p.title.toLowerCase().includes(search.toLowerCase()) &&
        !p.description.toLowerCase().includes(search.toLowerCase())) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://your-site.example/product/${p.id}`,
      "name": p.title
    }))
  };

  return (
    <>
      <Head>
        <title>Product Listing Page — Appscrip Task</title>
        <meta name="description" content="Browse our collection of products with filters and search. Responsive Product Listing Page implemented with Next.js and SSR." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header search={search} setSearch={setSearch} />

      <main className="container">
        <aside className="sidebar" aria-label="Filters">
          <h2>Filters</h2>
          <Filters
            categories={categories}
            selectedCategory={category}
            onSelectCategory={setCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            initialMax={initialMax}
          />
        </aside>

        <section className="product-section">
          <h1>Products</h1>
          <p className="results">{filtered.length} result(s)</p>
          <div className="product-grid" role="list">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const base = 'https://fakestoreapi.com';
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch(`${base}/products`),
      fetch(`${base}/products/categories`)
    ]);

    const products = await productsRes.json();
    const categories = await categoriesRes.json();
    return {
      props: {
        products,
        categories
      }
    };
  } catch (err) {
    console.error('API error:', err);
    return {
      props: {
        products: [],
        categories: []
      }
    };
  }
}
