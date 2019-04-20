import React from 'react';
import { Link } from "react-router-dom";

/* import styling */
import "./NavigationBar.sass"

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <Link to="/library"> My Library </Link>
        <Link to="/user/login"> Login </Link>
        <Link to="/user/signup"> Signup </Link>
      </div>
    </nav>
    );
}

export default NavigationBar;
