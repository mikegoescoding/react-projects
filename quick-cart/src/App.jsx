import { useState } from "react";

import "./App.css";

const products = [
  { id: 1, name: "Coffee", price: 3.99 },
  { id: 2, name: "Bagel", price: 2.49 },
  { id: 3, name: "Orange Juice", price: 4.49 },
  { id: 4, name: "Muffin", price: 3.29 },
];
export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Products:</h1>
      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.name} • {product.price} |
            <button
              onClick={() =>
                setCart((prevCart) => [
                  ...prevCart,
                  { ...product, cartId: Date.now() },
                ])
              }
            >
              Add to cart
            </button>
          </li>
        );
      })}
      <h3>
        🛒:
        {cart.length > 0 ? (
          <>
            Your items: <br />
            {cart.map(function (c) {
              return (
                <li key={c.cartId}>
                  {c.name} • {c.price} |
                  <button
                    onClick={() =>
                      setCart((prevCart) =>
                        prevCart.filter(
                          (item) => item.cartId !== c.cartId,
                        ),
                      )
                    }
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </>
        ) : (
          "Your shopping cart is empty."
        )}
      </h3>
      <ul></ul>
      <div>
        {cart
          .reduce(function (acc, item) {
            return acc + item.price;
          }, 0)
          .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
      </div>
    </>
  );
}
