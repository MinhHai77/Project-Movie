import React from "react";
import { AiOutlineHome, AiOutlineClockCircle } from "react-icons/ai";
import { RiCommunityFill, RiCompassDiscoverLine } from "react-icons/ri";
import { SideMenu, SideList, SideLogo, SideItem } from "./SidebarElement";
const Sidebar = ({ theme }) => {
  return (
    <>
      <SideMenu>
        <p>Menu</p>
        <SideList>
          <SideItem>
            <SideLogo>
              <AiOutlineHome />
            </SideLogo>
            <a href="#">
              <p>Home</p>
            </a>
          </SideItem>
          <SideItem>
            <SideLogo>
              <RiCommunityFill />
            </SideLogo>
            <a href="#">
              <p>Community</p>
            </a>
          </SideItem>
          <SideItem>
            <SideLogo>
              <RiCompassDiscoverLine />
            </SideLogo>
            <a href="#">
              <p>Discovery</p>
            </a>
          </SideItem>
          <SideItem>
            <SideLogo>
              <AiOutlineClockCircle />
            </SideLogo>
            <a href="#">
              <p>Coming soon</p>
            </a>
          </SideItem>
        </SideList>
      </SideMenu>
    </>
  );
};

export default Sidebar;
