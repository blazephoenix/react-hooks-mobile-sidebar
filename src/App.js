import React, { useState } from "react";
import "./styles.scss";
import Sidebar from "./components/Sidebar";

export default function App() {
  let [visible, setVisible] = useState(true);

  const showNav = {
    transform: "translateX(0%)"
  };
  const hideNav = {
    transform: "translateX(-100%)"
  };

  const links = ["Home", "About", "Blog", "Contact", "Login"];

  function handleClick() {
    setVisible(!visible);
  }

  return (
    <div className="App">
      <div className="pull" onClick={() => handleClick()}>
        <h1>Logo</h1>
      </div>
      {visible ? (
        <Sidebar style={hideNav} links={links} />
      ) : (
        <Sidebar style={showNav} links={links} />
      )}
    </div>
  );
}
