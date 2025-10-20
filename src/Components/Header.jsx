import { useState } from "react";
import { NavLink } from "react-router";

import { FaBagShopping, FaHeart } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuChevronRight } from "react-icons/lu";

import { NavBar } from "./Header/HeaderStyled.jsx";
import SeacrhBar from "./Header/SearchBar";
import ProfileTag from "./Header/ProfileTag";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  function handleMenuOpen() {
    setMenuState((prevState) => !prevState);
  }
  return (
    <NavBar>
      <nav>
        <NavLink to="/"><h2>Fefdy</h2></NavLink>
        
        <ul>
          <SeacrhBar />
          <div className={menuState ? "menu-wrapper active" : "menu-wrapper"}>
            <li id="menuClose" onClick={handleMenuOpen}>
              <LuChevronRight />
            </li>
            <NavLink to="/cart">
              <li>
                <FaBagShopping />
                <p>Cart</p>
              </li>
            </NavLink>

            <NavLink to='/fav'>
              <li>
                <FaHeart color="var(--red)" />
                <p>Favourites</p>
              </li>
            </NavLink>

            <ProfileTag />
          </div>
          <li className="hamburger-icon" onClick={handleMenuOpen}>
            <GiHamburgerMenu />
          </li>
        </ul>
      </nav>
    </NavBar>
  );
}
