import React, { useContext } from "react";
import Wishlist from "./Wishlist";

import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight,toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorized ? "logout" : "login"}
      </button>
      <button
      onClick={buy}
      >Buy</button>
      <button
      onClick={toggleTheme}
      >{`Make ${isLight?"Dark":"Light"}`}</button>
      <Wishlist />
    </div>
  );
};

export default Navbar;
