import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = { name: itemName, quantity: itemQuantity, price: itemPrice };
    setItems([...items, newItem]);
    setItemName("");
    setItemQuantity("");
    setItemPrice("");
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h2>Inventory</h2>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to Inventory</h1>
        <p>Inventory is a simple web application that helps you manage your products.</p>
        <h2>Inventory List</h2>
        <table id="inventoryTable">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add New Item</h2>
        <form onSubmit={handleAddItem}>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
          <label htmlFor="itemQuantity">Quantity:</label>
          <input
            type="number"
            id="itemQuantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
          <label htmlFor="itemPrice">Price:</label>
          <input
            type="number"
            id="itemPrice"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default App;
