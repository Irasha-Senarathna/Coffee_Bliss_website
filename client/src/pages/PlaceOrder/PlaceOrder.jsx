import React from 'react'
import useCart from '../../hooks/useCart'
import './PlaceOrder.css'
import { assets } from '../../assets/assets'

const PlaceOrder = () => {
  const {cartItems} =useCart();

  const consolidatedCart = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const grandTotal = consolidatedCart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const deliveryFee = 2;
  const totalWithDelivery = grandTotal + deliveryFee;

  return (
    <form className="place-order">
        <img src={assets.background_cart} alt="" className="background-place-order" />
        <div className="place-order-left">
            <p className='title'>Your Delivery Details</p>
            <div className="multi-field">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Street" />
            <div className="multi-field">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
            </div>
            <div className="multi-field">
                <input type="text" placeholder="Zip Code" />
            </div>
            <input type="text" placeholder="Phone Number" /> 
        </div>

        <div className="place-order-right">
            <div className="place-order-table">
            <div className="place-order-table-header">
              <span>Item</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {consolidatedCart.map((item) => (
              <div className="place-order-table-row" key={item._id}>
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>            
            ))}
          </div>
          <div className="place-order-total">
            <h4>Delivery Fee: $2</h4>
            <h3>Grand Total: ${totalWithDelivery.toFixed(2)}</h3>
          </div>
        </div>
        <div className="payment-button">
            <button>Proceed to Payment</button>
        </div>
    </form>
  )
}

export default PlaceOrder
