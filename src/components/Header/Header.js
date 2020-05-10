import React from "react";
import { Image } from "semantic-ui-react";
import logo from "assets/images/logo.png";

function Header() {
  return (
    <div id="header">
      <div className="header-logo-container">
        <Image src={logo} className="header-logo" />
        <div className="header-logo-title">
          Dragons Book
        </div>
      </div>
    </div>
  );
}

export default Header;