import { useState } from "react";
import { Link } from "react-router-dom";
import LogInModal from "./LogInModal";
import SignInModal from "./SignInModal";

function NavBar() {
     const [logInOpen, setLogInOpen] = useState<boolean>(false)
     const [signInIsOpen, setSignInOpen] = useState<boolean>(false)

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
        <li className="flex gap-1">
          <LogInModal logInIsOpen={logInOpen} setIsOpen={setLogInOpen} />
          <SignInModal signInIsOpen={signInIsOpen} setIsOpen={setSignInOpen} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
