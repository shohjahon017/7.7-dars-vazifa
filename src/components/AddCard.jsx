import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ADD_TO_CART = "ADD_TO_CART";

function AddCart() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (productName && productPrice) {
      dispatch({
        type: ADD_TO_CART,
        payload: {
          id: Date.now(),
          name: productName,
          price: parseFloat(productPrice),
          quantity: productQuantity,
        },
      });
      setProductName("");
      setProductPrice("");
      setProductQuantity(1);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col justify-center w-1/4 mx-auto gap-3"
    >
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border rounded-lg p-2"
        placeholder="Product"
        required
      />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="border rounded-lg p-2"
        placeholder="Price"
        required
      />
      <input
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
        className="border rounded-lg p-2"
        min="1"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Add to Cart
      </button>
    </form>
  );
}

export default AddCart;
