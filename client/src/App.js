import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./component/Home.js";
import AddItem from "./component/Additem.js";
import EditItem from "./component/Edititem.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </Router>
  );
};

export default App;
