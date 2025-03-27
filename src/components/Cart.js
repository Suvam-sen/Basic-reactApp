import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart Page</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 ? (
          <>
            <div className="flex justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleRemoveItem}
            >Remove Item
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleClearCart}
            >Clear Cart
            </button>
            </div>

            <ItemList items={cartItems} />
          </>
        ) : (
          <>
            <h2 className="text-lg text-gray-500 mt-4">Your cart is empty</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
