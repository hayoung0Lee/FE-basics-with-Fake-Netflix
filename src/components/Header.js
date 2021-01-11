import { Link } from "react-router-dom";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/browse">Browse</Link>
      </li>
      <li>
        <Link to="/browse/genre/popular">Popular</Link>
      </li>
      <li>
        <Link to="/browse/genre/latest">Latest</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
}

export default Header;
