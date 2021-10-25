import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.style";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            CDCA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/images" onClick={closeMobileMenu}>
                Images
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/map" onClick={closeMobileMenu}>
                Map
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/joke" onClick={closeMobileMenu}>
                Joke
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
