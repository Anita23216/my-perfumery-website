import { ShopList } from "../ShopList";
import ShopItem from "../Components/ShopItem";
import "../Styles/Shop.css";

function Shop(){
    return(
        <div className="shop">
            <div className="shopList">
                {ShopList.map((shopItem, key)=>{
                    return <ShopItem
                    key={key}
                    id={shopItem.id}
                    image={shopItem.image}
                    name={shopItem.name}
                    price={shopItem.price}
                    />
                })}
            </div>
        </div>
    )
}
export default Shop