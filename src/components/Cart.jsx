import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 mx-20">
      {cartItems.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col border p-4 rounded shadow-lg w-full md:w-1/2 lg:w-1/3"
            >
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
                className="bg-red-500 text-white px-2 py-1 rounded mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
