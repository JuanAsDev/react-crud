import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [itemName, setItemName] = useState("");

  const handleAddItem = () => {
    // Send a POST request to add an item
    axios
      .post("http://localhost:5000/items", { name: itemName })
      .then((response) => {
        console.log("Item added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
