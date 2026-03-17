const categories = [
  { label: "All Projects", value: "all" },
  { label: "Websites", value: "website" },
  { label: "Apps", value: "app" },
  { label: "AI", value: "ai" },
];

const CardFilter = ({ activeCategory, setCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={activeCategory === cat.value ? "active" : ""}
          onClick={() => setCategory(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CardFilter;
