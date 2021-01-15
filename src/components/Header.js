import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBtn from "./Search/SearchBtn";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 68px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  // border: 1px solid white;
`;

const Logo = styled.li`
  width: min-content;
  height: 25px;
  color: red;
  font-size: 3.5vh;
`;

const NavMenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 18px;
`;

function Header() {
  return (
    <HeaderWrap>
      <NavMenu>
        <Logo>
          <span>FAKEFLIX</span>
        </Logo>
        <li>
          <NavMenuLink to="/browse">Home</NavMenuLink>
        </li>
        <li>
          <NavMenuLink to="/browse/genre/tvshows">TV Shows</NavMenuLink>
        </li>
        <li>
          <NavMenuLink to="/browse/genre/movies">Movies</NavMenuLink>
        </li>
        <li>
          <NavMenuLink to="/browse/genre/newpopular">
            New &amp; Popular
          </NavMenuLink>
        </li>
        <li>
          <NavMenuLink to="/settings">My List</NavMenuLink>
        </li>
      </NavMenu>
      <SearchBtn />
    </HeaderWrap>
  );
}

export default Header;
