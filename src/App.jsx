import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

// Picture (emoji) for each product, matched by product id
const productImages = {
  1: "🖱️",
  2: "⌨️",
  3: "🔌",
  4: "📘",
  5: "⚛️",
  6: "📓",
  7: "💼",
  8: "🥤",
};

function App() {
  // useState: cart count and last added product
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Callback function: the child calls this and passes the product title
  const handleAddToCart = (title) => {
    setCartCount(cartCount + 1);
    setLastAdded(title);
  };

  return (
    <div className="app">
      {/* Header: store name and cart count */}
      <header className="header">
        <div className="header-inner">
          <h1>CvSU Mini Store</h1>
          <span className="cart-badge">Cart: {cartCount}</span>
        </div>
      </header>

      {/* Welcome section */}
      <section className="welcome">
        <h2>Welcome to CvSU Mini Store!</h2>
        <p>Affordable school supplies, gadgets, and CvSU merchandise for every student.</p>
        <p>Browse our products and add them to your cart.</p>
      </section>

      <main className="container">
        {/* Cart message */}
        <p className="cart-message">
          {cartCount === 0
            ? "Your cart is empty."
            : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
        </p>

        {/* .map() with a unique key for each ProductCard */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >
              {/* children prop: the product picture and an optional badge */}
              <span className="product-image" role="img" aria-label={product.title}>
                {productImages[product.id]}
              </span>
              {product.id === 1 && <span className="badge">Best Seller</span>}
              {product.id === 4 && <span className="badge">Best Seller</span>}
              {product.id === 5 && <span className="badge">New Arrival</span>}
            </ProductCard>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>CvSU Mini Store - Laboratory Exercise 3 (React Props)</p>
        <p>All prices are in Philippine Peso (₱)</p>
      </footer>
    </div>
  );
}

export default App;
