import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchBtn from '../component/SearchBtn';
import Store from '../utils/store';
import { useContext } from 'react';

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: 5%;
    padding-right: 5%;
    position: fixed;
    z-index: 100;
    background-image: ${(props) =>
        props.scroll < 15
            ? `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  )`
            : ''};
    background-color: ${(props) => (props.scroll >= 15 ? `#141414` : '')};
    transition: background-color 0.5s;
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
`;

const Logo = styled.li`
    width: min-content;
    height: 25px;
    color: red;
    font-size: 3.5vh;
`;

const NavMenuLink = styled(NavLink)`
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    margin-left: 18px;
    cursor: pointer;
`;

const activeStyle = {
    fontWeight: 'bold',
    color: 'white',
    cursor: 'default',
    pointerEvents: 'none',
};

function Header(props) {
    // eslint-disable-next-line
    const [scroll, setScroll] = useContext(Store).scroll;

    return (
        <HeaderWrap scroll={scroll}>
            <NavMenu>
                <NavMenuLink exact to="/browse">
                    <Logo>
                        <span>FAKEFLIX</span>
                    </Logo>
                </NavMenuLink>
                <li>
                    <NavMenuLink exact to="/browse" activeStyle={activeStyle}>
                        Home
                    </NavMenuLink>
                </li>
                <li>
                    <NavMenuLink exact to="/browse/genre/tvshows" activeStyle={activeStyle}>
                        TV Shows
                    </NavMenuLink>
                </li>
                <li>
                    <NavMenuLink exact to="/browse/genre/movies" activeStyle={activeStyle}>
                        Movies
                    </NavMenuLink>
                </li>
                <li>
                    <NavMenuLink exact to="/browse/genre/newpopular" activeStyle={activeStyle}>
                        New &amp; Popular
                    </NavMenuLink>
                </li>
                <li>
                    <NavMenuLink exact to="/settings" activeStyle={activeStyle}>
                        My List
                    </NavMenuLink>
                </li>
            </NavMenu>
            <SearchBtn />
        </HeaderWrap>
    );
}

export default Header;
