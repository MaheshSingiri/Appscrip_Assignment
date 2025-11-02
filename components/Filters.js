export default function Filters({ categories, selectedCategory, onSelectCategory, maxPrice, setMaxPrice, initialMax }) {
  return (
    <div>
      <div className="filter-block">
        <h3>Category</h3>
        <select value={selectedCategory} onChange={e => onSelectCategory(e.target.value)} aria-label="Select category">
          <option value="all">All</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-block">
        <h3>Max price: ₹{maxPrice}</h3>
        <input
          type="range"
          min="0"
          max={initialMax}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className="price-helpers">
          <small>0</small>
          <small>{initialMax}</small>
        </div>
      </div>

      <div className="filter-block">
        <h3>Sort (client-side)</h3>
        <p className="hint">Small JS only — sorting can be added if requested.</p>
      </div>
    </div>
  );
}
