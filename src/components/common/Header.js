import React, { useState } from "react";
import styled from "styled-components";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  left: 0;
  background: #f5f5f5;
  @media (min-width: 768px) {
    height: 100px;
  }
`;

const Menu = styled.nav`
  display: ${p => (p.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  background: ${p => p.theme.bodyBackgroundColor};
  border-bottom: ${p => p.theme.secondaryColor} solid 3px;

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
  font-weight: ${p => (p.isActive ? "bold" : "normal")};
  color: ${p => p.theme.bodyFontColor};
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
    background: ${p => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #d8073f;
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <h1>Thomas Neal</h1>
      </TitleWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/notes" isActive={pathname === "/notes"}>
          Notes
        </StyledLink>
        <StyledLink to="/portfolio" isActive={pathname === "/portfolio"}>
          Projects
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
