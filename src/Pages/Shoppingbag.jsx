import { useContext } from "react";
import { ShopList } from "../ShopList";
import { ShopContext } from "../context/shop-context";
import ShoppingBagItem from "../Components/ShoppingBagItem";
import "../Styles/Shoppingbag.css";

function ShoppingBag(){
    const { shoppingBagItems } = useContext(ShopContext)
    return(
        <div className="pageWrapper">
            <div className="shoppingbagContainer">
                <div>
                    <h1>My items</h1>
                </div>
                <div className="shoppingbagItems">
                    {ShopList.map((ShopItem) =>{
                        if (shoppingBagItems[ShopItem.id] !== 0) {
                            return <ShoppingBagItem data={ShopItem} />;
                        }
                    })}
                </div>
                
            </div>
            
        </div>
    );
}
export default ShoppingBag