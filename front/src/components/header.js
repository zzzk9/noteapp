import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Notes-test</Link>
        <Link to="/add">Add Notes</Link>
      </nav>
    </div>
  );
};

export default Header;
