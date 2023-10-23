import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const getItems = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/items",
    })
      .then((result) => {
        setItems(result.data);
        // console.log(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
