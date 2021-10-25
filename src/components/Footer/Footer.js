import React from "react";
import { FaGithub } from "react-icons/fa";
import { FooterContainer, Logo, FooterItems, FooterItem } from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItem>
          <Logo to="/">CDCA</Logo>
        </FooterItem>
        <FooterItem>demo app</FooterItem>
        <FooterItem>
          <Logo
            to={{
              pathname: "https://github.com/cdca",
            }}
            target="_blank"
          >
            <FaGithub />
          </Logo>
        </FooterItem>
      </FooterItems>
    </FooterContainer>
  );
}

export default Footer;
