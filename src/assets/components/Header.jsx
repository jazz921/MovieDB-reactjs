import React from "react";
import Logo from '../logo.png'

const Header = () => {
  return (
    <div className="header">
      <div style={{cursor: 'pointer'}} onClick={() => location.reload()}>
        <img src={Logo} height="50" alt="" />
        <div>
          <h1>MovieDB</h1>
          <p>Your best movie databse</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
