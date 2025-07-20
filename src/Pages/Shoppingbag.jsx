import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { ShopList } from "../ShopList";
import "../Styles/Shoppingbag.css";

const Shoppingbag = () => {
  const { shoppingBagItems, addToBag, removeFromBag } = useContext(ShopContext);
  const itemsInBag = ShopList.filter(item => shoppingBagItems[item.id] > 0);
  const totalAmount = itemsInBag.reduce((sum, item) => sum + item.price * shoppingBagItems[item.id], 0).toFixed(2);

  return (
    <div className="shoppingbag">
      <h1>Your Shopping Bag</h1>
      <div className="shoppingbag__list">
        {itemsInBag.length === 0 ? (
          <div className="shoppingbag__empty">
            <span role="img" aria-label="empty bag" style={{fontSize: '2.5rem', display: 'block', marginBottom: '1rem'}}>👜</span>
            Your bag is empty. Start shopping for your signature scent!
          </div>
        ) : (
          itemsInBag.map((item) => (
            <div className="shoppingbag__item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="shoppingbag__item-info">
                <h2>{item.name}</h2>
                <div className="shoppingbag__item-price">${item.price}</div>
                <div className="shoppingbag__item-controls">
                  <button onClick={() => removeFromBag(item.id)}>-</button>
                  <span className="shoppingbag__item-qty">{shoppingBagItems[item.id]}</span>
                  <button onClick={() => addToBag(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {itemsInBag.length > 0 && (
        <div className="shoppingbag__summary">
          <div className="shoppingbag__total">
            <span>Total:</span>
            <span>${totalAmount}</span>
          </div>
          <button className="shoppingbag__checkout" disabled={totalAmount === 0}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Shoppingbag;