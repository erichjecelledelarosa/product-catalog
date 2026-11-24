import "./ProductCard.css";

// Props are destructured in the function parameters.
// category has a default value of "General".
function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  // Format the price like ₱1,299.00
  const formattedPrice =
    "₱" +
    price.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    // Conditional styling: add "out-of-stock" class when not in stock
    <div className={inStock ? "card" : "card out-of-stock"}>
      {/* children prop: badge such as "New Arrival" or "Best Seller" */}
      {children}

      <h3>{title}</h3>
      <p className="category">{category}</p>
      <p className="price">{formattedPrice}</p>

      {/* Conditional rendering of the stock label */}
      {inStock ? (
        <p className="stock in-stock">In Stock</p>
      ) : (
        <p className="stock no-stock">Out of Stock</p>
      )}

      {/* Disabled when out of stock. Calls the parent's function with the title. */}
      <button disabled={!inStock} onClick={() => onAddToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
