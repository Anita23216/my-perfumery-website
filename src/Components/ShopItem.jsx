import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function ShopItem({ id, image, name, price }) {
  const { addToBag, removeFromBag, shoppingBagItems } = useContext(ShopContext);
  const itemAmount = shoppingBagItems[id] || 0;

  return (
    <div className="shopitems">
      <div className="shopItem">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
      </div>

      <div className="item-buttons">
        <button onClick={() => addToBag(id)}>Add to bag</button>
        {itemAmount > 0 && (
          <>
            <span> ({itemAmount}) </span>
            <button onClick={() => removeFromBag(id)}>Remove from bag</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ShopItem;
