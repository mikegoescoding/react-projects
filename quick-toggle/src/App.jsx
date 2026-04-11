import { useState } from "react";
import "./App.css";
import deliveryIcon from "./assets/delivery.png";
import pickupIcon from "./assets/pickup.png";
import resetIcon from "./assets/reset.png";

export default function App() {
  const [toggle, setToggle] = useState(null);

  function handleToggle(value) {
    setToggle(value);
  }

  return (
    <div className="quick-rep">
      <h2>Store Pickup or Delivery?</h2>
      <div
        className="button-group"
        role="group"
        aria-label="Fulfillment method"
      >
        <button
          onClick={() => handleToggle(true)}
          className={toggle === true ? "active" : ""}
          aria-label="Choose Store Pickup"
          aria-pressed={toggle === true}
        >
          Store Pickup
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={toggle === false ? "active" : ""}
          aria-label="Choose Delivery"
          aria-pressed={toggle === false}
        >
          Delivery
        </button>
      </div>
      <div className="chosen-method">
        You have selected:
        <section>
          {toggle === null ? (
            <h4>Make your selection above</h4>
          ) : toggle ? (
            <>
              <h3>Store Pickup</h3>
              <img
                src={pickupIcon}
                alt="Pickup icon"
                className="icon"
              />
            </>
          ) : (
            <>
              <h3>Delivery</h3>
              <img
                src={deliveryIcon}
                alt="Delivery icon"
                className="icon"
              />
            </>
          )}
        </section>
      </div>
      <div className="reset-container">
        <button
          aria-label="Reset selection"
          className="reset-button"
          onClick={() => setToggle(null)}
        >
          <img
            src={resetIcon}
            alt=""
            className="reset-icon"
          />
        </button>
      </div>
    </div>
  );
}
