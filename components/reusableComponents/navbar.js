import React from "react";
import styled from "styled-components";
import FeedIcon from "../../static/images/home-icon.svg";
import JobIcon from "../../static/images/briefcase-icon.svg";
import CreateIcon from "../../static/images/edit-icon.svg";
import GameIcon from "../../static/images/gamepad-icon.svg";
import MapIcon from "../../static/images/map-icon.svg";
import ProfileIcon from "../../static/images/userprofile-icon.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <NavigationHolder>
          <NavbarButtonHolder>
            <FeedIcon />
            <p>Feed</p>
          </NavbarButtonHolder>
          <NavbarButtonHolder>
            <JobIcon />
            <p>Job</p>
          </NavbarButtonHolder>
          <NavbarButtonHolder>
            <CreateIcon />
            <p>Create</p>
          </NavbarButtonHolder>
          <NavbarButtonHolder>
            <GameIcon />
            <p>Game</p>
          </NavbarButtonHolder>
          <NavbarButtonHolder>
            <MapIcon />
            <p>Map</p>
          </NavbarButtonHolder>
        </NavigationHolder>
        <ProfileButtonHolder>
          <NavbarButtonHolder>
            <ProfileIcon />
            <p>Profile</p>
          </NavbarButtonHolder>
        </ProfileButtonHolder>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  background-image: linear-gradient(
    to right,
    #00c6ff 0%,
    #0072ff 51%,
    #00c6ff 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  background-size: 200% auto;
  color: white;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  width: 90%;
`;

const NavigationHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

const ProfileButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const NavbarButtonHolder = styled.div``;
