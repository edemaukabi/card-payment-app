import React from "react";
import { FcBusinessman } from "react-icons/fc"
import "../styles/Navbar.css";

export const Navbar = ({ headerItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar__header">
        <ul className="navbar__links-wrapper">
          {headerItems.map((headerItem, index) => (
            <li className="navbar__links-item" key={index}>{headerItem.toUpperCase()}</li>
          ))}
          <li className="navbar__links-item navbar__links-item--avatar">
            <FcBusinessman className="navbar__avatar-icon"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};
