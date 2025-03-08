import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './Carts.css';

const Carts = () => {
  const url = 'http://localhost:4000';

  const [cartId, setCartId] = useState('');
  const [userId, setUserId] = useState('');
  const [cartDetails, setCartDetails] = useState(null);
  const [userCarts, setUserCarts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchByCartId = async () => {
    if (!cartId.trim()) {
      toast.error('Please enter a valid Cart ID.');
      return;
    }

    setLoading(true);
    setCartDetails(null);
    setUserCarts([]); // Clear user carts when searching by cartId

    try {
      const response = await axios.get(`${url}/api/cart/getCartDetailsByCartId/${cartId}`);
      if (response.data.success) {
        setCartDetails(response.data);
      } else {
        toast.error(response.data.message || 'No cart found.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch cart.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchByUserId = async () => {
    if (!userId.trim()) {
      toast.error('Please enter a valid User ID.');
      return;
    }

    setLoading(true);
    setCartDetails(null); // Clear cart details when searching by userId
    setUserCarts([]);
    setUserInfo(null); // Clear previous user info

    try {
      const response = await axios.get(`${url}/api/cart/getCartsByUserId/${userId}`);
      if (response.data.success) {
        setUserCarts(response.data.carts);
        setUserInfo(response.data.user);
      } else {
        toast.error(response.data.message || 'No carts found for this user.');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch carts');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="carts">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h1>Search Carts</h1>
      <div className="search-container">
        <div className="search-bar">
          <h2>Search by Cart ID</h2>
          <input type="text" placeholder="Enter Cart ID" value={cartId} onChange={(event) => setCartId(event.target.value)}/>
          <button onClick={handleSearchByCartId} disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
        </div>
        <div className="search-bar">
          <h2>Search by User ID</h2>
          <input type="text" placeholder="Enter User ID" value={userId} onChange={(event) => setUserId(event.target.value)}/>
          <button onClick={handleSearchByUserId} disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>
        </div>
      </div>

      <div className="results-container">
        {cartDetails && (
          <div className="cart-details">
            <h2>Cart Details</h2><br/>
            <p>
              <strong>User ID:</strong> {cartDetails.user.user_id} <br />
              <strong>Username:</strong> {cartDetails.user.user_name}
            </p>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Sub Total</th>
                </tr>
              </thead>
              <tbody>
                {cartDetails.cart_items.map((item) => (
                  <tr key={item.item_id}>
                    <td>{item.item.name}</td>
                    <td>{item.item.category}</td>
                    <td>{item.quantity}</td>
                    <td>${parseFloat(item.item.price).toFixed(2)}</td>
                    <td>${parseFloat(item.sub_total).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="total-label">
                    Total:
                  </td>
                  <td>${parseFloat(cartDetails.cart.total).toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
        {userCarts.length > 0 && (
          <div className="user-carts">
            <h2>Cart Details</h2><br/>
            <p>
              <strong>User ID:</strong> {userInfo.user_id} <br />
              <strong>Username:</strong> {userInfo.user_name} <br/><br/>
            </p>
            {userCarts.map((cart) => (
              <div key={cart.cart_id} className="cart-section">
                <h3>Cart ID: {cart.cart_id} | Total: ${parseFloat(cart.total).toFixed(2)}</h3>
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.cart_items.map((item) => (
                      <tr key={item.item_id}>
                        <td>{item.item.name}</td>
                        <td>{item.item.category}</td>
                        <td>{item.quantity}</td>
                        <td>${parseFloat(item.item.price).toFixed(2)}</td>
                        <td>${parseFloat(item.sub_total).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <br/>
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
