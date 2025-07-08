import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
function ShoppingBagItem(props){
    const {id, name, price, image} =props.data;
    const { shoppingBagItems, addToBag, removeFromBag } = useContext(ShopContext);
    return(
        <div className="shoppingbagItem">
            <img src={image}/>
            <div className="description">
                <p><b>{name}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromBag(id)}>-</button>
                    <input value={shoppingBagItems[id]} onChange={(e) => updateShoppingBagItemCount(Number(e.target.value),id)} />
                    <button onClick={() => addToBag(id)}>+</button>
                </div>

            </div>
        </div>
    );
}
export default ShoppingBagItem