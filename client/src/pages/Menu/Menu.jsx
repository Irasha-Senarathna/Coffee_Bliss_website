import React, { useState } from 'react';
import './Menu.css';
import { menu_list } from '../../assets/assets';
import { assets } from '../../assets/assets';
import useCart from '../../hooks/useCart';
import Modal from '../../components/Modal/Modal';

const Menu = () => {
  const { addItemToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [quantities, setQuantities] = useState({}); // Track quantities for each item

  const handleAddToCart = (item, quantity) => {
    addItemToCart(item, quantity);
    setModalContent(
      <>
        <p>
          <span className="modal-highlight">{quantity} {item.name}(s)</span> have been added to your cart 🎉
        </p>
        <p>Enjoy exploring more delicious brews!</p>
      </>
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (itemId, value) => {
    setQuantities((prev) => ({ ...prev, [itemId]: value }));
  };

  return (
    <div className="menu-page">
      <img src={assets.background_menu} alt="" className="background-menu" />
      <div className="menu-list">
        {menu_list.map((item, index) => {
          const quantity = quantities[item._id] || 1; // Default to 1 if not set
          return (
            <div key={index} className="menu-item">
              <img className="coffee-image" src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p className="description">{item.description}</p>
              <p>Category: {item.category}</p>
              <div className="quantity-container">
                <p>Quantity:</p>
                <div className="quantity-controls">
                  <button className="quantity-button" onClick={() =>handleQuantityChange(item._id, Math.max(1, quantity - 1))}>➖</button>
                  <span className="quantity-display">{quantity}</span>
                  <button className="quantity-button" onClick={() => handleQuantityChange(item._id, quantity + 1)}>➕</button>
                </div>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(item, quantity)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
};

export default Menu;
