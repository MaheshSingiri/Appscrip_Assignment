export default function ProductCard({ product }) {
  const alt = `${product.title} product image`;

  return (
    <article className="product-card" role="listitem">
      <img
        src={product.image}
        alt={alt}
        className="product-image"
        width="240"
        height="240"
      />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">₹{product.price}</p>
        <p className="product-desc">{product.description.slice(0, 120)}{product.description.length > 120 ? '...' : ''}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </article>
  );
}
