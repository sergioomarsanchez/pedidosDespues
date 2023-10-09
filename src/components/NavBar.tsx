import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="text-white p-2 bg-teal-900 w-full">
      <ul className="flex items-center justify-around">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
