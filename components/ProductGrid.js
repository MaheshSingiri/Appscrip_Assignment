// components/ProductGrid.js
export default function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "NEW PRODUCT",
      img: "/assets/bag.png",
      status: "",
      price: "$120",
    },
    {
      id: 2,
      title: "OUT OF STOCK",
      img: "/assets/doll.png",
      status: "Out of Stock",
      price: "$80",
    },
    {
      id: 3,
      title: "LEATHER KEYCHAIN",
      img: "/assets/keychain.png",
      price: "$25",
    },
    {
      id: 4,
      title: "WOOL HAT",
      img: "/assets/hat.png",
      price: "$35",
    },
  ];

  return (
    <section className="product-section">
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="img-box">
              <img src={p.img} alt={p.title} />
              {p.status && <span className="tag">{p.status}</span>}
            </div>
            <h4>{p.title}</h4>
            <p className="price">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
