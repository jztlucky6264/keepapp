import React from "react";
import Logo from "./Images/ninja-mascot-logo-esport-gaming_92675-454.jpg";
const Header = () => {
  return (
    <div className="main_div">
      <div className="top_div">
        <img src={Logo} alt="logo" width="40" height="40" />
        <h1>Yadav keep</h1>
      </div>
    </div>
  );
};
export default Header;
