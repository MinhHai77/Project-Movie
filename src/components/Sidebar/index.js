import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElement";
import { SidebarRoute } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../../reducers/navbar";

const Sidebar = () => {
  const { navbar } = useSelector((state) => state);
  const dispatch = useDispatch();
  const openSidebar = () => {
    dispatch(openNav());
  };
  return (
    <SidebarContainer isOpen={navbar}>
      <Icon onClick={openSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="showtimes" onClick={openSidebar}>
            Show Time
          </SidebarLink>
          <SidebarLink to="Cluster" onClick={openSidebar}>
            Cluster Of Theaters
          </SidebarLink>
          <SidebarLink to="news" onClick={openSidebar}>
            News
          </SidebarLink>
          <SidebarLink to="app" onClick={openSidebar}>
            Application
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
