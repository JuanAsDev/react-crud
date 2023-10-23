import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditItem = () => {
  const { id } = useParams();
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    // Fetch the item to be edited using Axios GET request
    axios
      .get(`http://localhost:5000/items/${id}`)
      .then((response) => {
        setItemName(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching item:", error);
      });
  }, [id]);

  const handleEditItem = () => {
    // Send a PUT request to edit the item
    axios
      .put(`http://localhost:5000/items/${id}`, { name: itemName })
      .then((response) => {
        console.log("Item edited:", response.data);
      })
      .catch((error) => {
        console.error("Error editing item:", error);
      });
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleEditItem}>Save Changes</button>
    </div>
  );
};

export default EditItem;
