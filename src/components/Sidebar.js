import React from "react";
import "./sidebar.scss";

export default function Sidebar(props) {
  return (
    <nav className="sidebar" style={props.style}>
      <ul className="sidebar--inner">
        {props.links.map(link => {
          return (
            <li key={link.index} className="sidebar--inner-item">
              <a href="#/" className="sidebar--inner-item__link">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
