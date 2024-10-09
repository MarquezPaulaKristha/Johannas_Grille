import React, { useState } from 'react';
import { menu_list } from '../../../assets/assets';
import './Menu.css';

const Menu = ({ category, setCategory, refreshItems }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [availability, setAvailability] = useState('');
  const [portion, setPortion] = useState('');
  const [image, setImage] = useState(null);

  const categories = ["Appetizer", "Must", "House", "Party", "Dessert", "Drink"];

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('price', price);
    formData.append('category', selectedCategory);
    formData.append('availability', availability);
    formData.append('portion', portion);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:3000/api/menuitems', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('New menu item added:', result);
        setShowPopup(false);
        refreshItems();
      } else {
        console.error('Error adding menu item');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="admin-product-menu">
      <h1>Product</h1>

      <button className="admin-add-product-button" onClick={() => setShowPopup(true)}>
        Add Products
      </button>

      {showPopup && (

        <div className="admin-popup-form">
          <div className="admin-popup-content">
            <h2>Add New Product</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Enter product name"
                className="admin-popup-input"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Enter product availability"
                className="admin-popup-input"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Enter product portion"
                className="admin-popup-input"
                value={portion}
                onChange={(e) => setPortion(e.target.value)}
                required
              />

              <input
                type="number"
                placeholder="Enter product price"
                className="admin-popup-input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="admin-popup-input"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <input
                type="file"
                className="admin-popup-input"
                onChange={handleImageChange}
                required
              />

              <div className="admin-popup-actions">
                <button type="submit" className="admin-popup-button submit">Submit</button>
                <button type="button" className="admin-popup-button cancel" onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>

      )}

      <div className="admin-product-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className="admin-product-menu-item"
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
