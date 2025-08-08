import React from "react";
import "../productPage/ProductPage.css";
import { LuShoppingCart } from "react-icons/lu";
import { products } from "./Data";
import useLocalStorage from "../Hooks/hook";
import { addItem, bumpQty, formatMoney, removeItem } from "../Utils/utils";
import ProductCard from "../productCard/productCard";

export default function ProductPage() {
  // Local storage handled by the hook
  const [cart, setCart] = useLocalStorage("cart", []);

  const [selected, setSelected] = React.useState({});
  const [cartOpen, setCartOpen] = React.useState(false);

  const updateSelected = (id, key, value) => {
    setSelected((prev) => ({
      ...prev,
      [id]: { ...prev[id], [key]: value },
    }));
  };

  const addToCart = (id, size, color, payload) => {
    if (!size || !color) return;
    const unitPrice = payload?.unitPrice ?? 0;
    const qtyToAdd = Math.max(1, Number(payload?.quantity || 1));
    setCart((prev) =>
      addItem(prev, products, { id, size, color, unitPrice, qty: qtyToAdd })
    );
  };

  const removeFromCartHandler = (id, size, color) => {
    setCart((prev) => removeItem(prev, { id, size, color }));
  };

  const updateQty = (id, size, color, amount) => {
    setCart((prev) => bumpQty(prev, { id, size, color, amount }));
  };

  // Inline total; no totalItemsSel import needed
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const LOCALE = "fi-FI";

  return (
    <main className="product-page">
      <div className="product-page__grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            imageUrl={p.imageUrl}
            name={p.name}
            price={p.price}
            currency={p.currency}
            sizes={p.sizes}
            colors={p.colors}
            selectedSize={selected[p.id]?.size}
            selectedColor={selected[p.id]?.color}
            onSizeChange={(size) => updateSelected(p.id, "size", size)}
            onColorChange={(color) => updateSelected(p.id, "color", color)}
            inStock={p.inStock}
            quantity={selected[p.id]?.qty ?? 1}
            onQuantityChange={(q) => updateSelected(p.id, "qty", q)}
            onAddToCart={(payload) =>
              addToCart(
                p.id,
                selected[p.id]?.size,
                selected[p.id]?.color,
                payload
              )
            }
          />
        ))}

        <div className="shopping-cart" onClick={() => setCartOpen(true)}>
          <LuShoppingCart size={47} />
          {total > 0 && <span className="cart-count">+{total}</span>}
        </div>
      </div>

      {cartOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal">
            <div className="cart-modal-header">
              <h3>Your Cart</h3>
              <button onClick={() => setCartOpen(false)}>✖</button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <ul className="cart-items">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.size}-${item.color}`}>
                    <img src={item.imageUrl} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>
                        {item.size} | {item.color}
                      </p>
                      <p>
                        {formatMoney(item.price, item.currency, LOCALE)} ×{" "}
                        {item.qty} ={" "}
                        {formatMoney(
                          item.price * item.qty,
                          item.currency,
                          LOCALE
                        )}
                      </p>
                      <div className="qty-controls">
                        <button
                          onClick={() =>
                            updateQty(item.id, item.size, item.color, -1)
                          }
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          onClick={() =>
                            updateQty(item.id, item.size, item.color, 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeFromCartHandler(item.id, item.size, item.color)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
