import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import store from "../../store";
import { logout } from "../../actions/auth";
import sun from "../../img/sun.jpg";

const HeaderWrapper = styled.header`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #054b86, #87b787);
  @media (min-width: 768px) {
    height: 100px;
  }
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  background: ${(p) => p.theme.bodyBackgroundColor};
  border-bottom: #054b86 solid 3px;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;

    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => p.theme.bodyFontColor};
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  &:hover {
    > div {
      margin-top: 7px;
    }
  }

  > div {
    height: 3px;
    background: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Styledimage = styled.img`
  width: 70px;
  @media (min-width: 768px) {
    width: 150px;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const me = useSelector((state) => state.auth.isMe);

  const logoutUser = () => {
    store.dispatch(logout());
    return <Redirect to="/login" />;
  };
  return (
    <HeaderWrapper>
      <Styledimage src={sun} alt="sun image" />

      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/notes" isActive={pathname === "/notes"}>
          Feed
        </StyledLink>
        <StyledLink to="/portfolio" isActive={pathname === "/portfolio"}>
          Projects
        </StyledLink>
        {!isAuthenticated && (
          <StyledLink to="/login" isActive={pathname === "/login"}>
            Login
          </StyledLink>
        )}
        {isAuthenticated && (
          <StyledLink to="/login" onClick={logoutUser}>
            Logout
          </StyledLink>
        )}
        {isAuthenticated && me && (
          <StyledLink to="/dashboard" isActive={pathname === "/dashboard"}>
            Dashboard
          </StyledLink>
        )}
      </Menu>
    </HeaderWrapper>
  );
}
