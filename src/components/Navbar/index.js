import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavbarElelement";
import { NavBtnLink } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../../reducers/navbar";
const Navbar = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(openNav());
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">4hoangvua</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="showtimes">Show Times</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Cluster">Cluster Of Theaters</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="news">News</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="app">Application</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
