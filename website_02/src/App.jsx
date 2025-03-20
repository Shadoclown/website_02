import { useState } from "react";
import "./App.css";

function App() {

  return (
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
  );
}

export default App;
