// src/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink exact to="/" activeClassName="active">
        Personal Information
      </NavLink>
      <NavLink to="/transactions" activeClassName="active">
        Transaction History
      </NavLink>
    </div>
  );
};

export default Sidebar;
