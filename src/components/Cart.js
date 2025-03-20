import React from "react";

const Cart = () => {
  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Your Cart</h1>
      <p className="cart-page-message">Your cart is empty. Add some delicious food items!</p>
      <button className="cart-page-button">Browse Restaurants</button>
    </div>
  );
};

export default Cart;
