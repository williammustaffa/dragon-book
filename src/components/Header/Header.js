import React from "react";
import { Image } from "semantic-ui-react";
import logo from "assets/images/logo.svg";

function Header() {
  return (
    <div className="custom-header">
      <Image src={logo} className="header-logo" />
    </div>
  );
}

export default Header;