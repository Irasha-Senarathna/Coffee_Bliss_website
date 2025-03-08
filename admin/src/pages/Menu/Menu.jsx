import React, { useEffect, useState } from 'react';
import './Menu.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Menu = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Espresso",
  });
  const [menuItems, setMenuItems] = useState([]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  // API call to fetch menu items
  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`${url}/api/item/get`);
      console.log(response.data);
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      toast.error("Error fetching menu items");
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // API call to add a new item
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/item/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Espresso",
        });
        setImage(false);
        fetchMenuItems(); // Refresh menu list after adding an item
       toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // API call to remove an item
  const removeItemHandler = async (itemId) => {
    try {
      const response = await axios.delete(`${url}/api/item/remove/${itemId}`);
      if (response.data.success) {
        fetchMenuItems(); // Refresh menu list after removing an item
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className='menu'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload} alt='' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
        </div>
        <div className="add-name flex-col">
          <p>Item</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Item Name' />
        </div>
        <div className="add-description flex-col">
          <p>Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Item Description' />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select onChange={onChangeHandler} value={data.category} name='category'>
              <option value="Espresso">Espresso</option>
              <option value="Cappuccino">Cappuccino</option>
              <option value="Latte">Latte</option>
              <option value="Mocha">Mocha</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Price</p>
            <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='Price' />
          </div>
        </div>
        <button type='submit' className='add-button'>Add to Menu</button>
      </form>

      {/* Current Menu Items */}
      <div className="current-menu">
        <h2>Current Menu</h2>
        <div className="menu-items">
          {menuItems.length === 0 ? (
            <p>No items available on the menu.</p>
          ) : (
            menuItems.map(item => (
              <div key={item.item_id} className="menu-item">
                <img src={`${url}/images/`+item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>Category:</strong> {item.category}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <button onClick={() => removeItemHandler(item.item_id)} className="remove-button">Remove from the Menu</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
