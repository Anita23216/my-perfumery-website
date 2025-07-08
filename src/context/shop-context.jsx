import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [shoppingBagItems, setShoppingBagItems] = useState({});

  const addToBag = (id) => {
    setShoppingBagItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1,
    }));
  };

  const removeFromBag = (id) => {
    setShoppingBagItems((prevItems) => {
      if (!prevItems[id]) return prevItems;

      const updated = { ...prevItems };
      updated[id] = updated[id] - 1;

      if (updated[id] <= 0) {
        delete updated[id];
      }

      return updated;
    });
  };

  return (
    <ShopContext.Provider value={{ shoppingBagItems, addToBag, removeFromBag }}>
      {children}
    </ShopContext.Provider>
  );
};
