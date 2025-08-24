import "../css/NavBar.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
function NavBar() {
  const navRef = useRef(null);
  useKeyboardNavigation(navRef, (e) => {
    // Example: focus first link on ArrowDown
    if (e.key === "ArrowDown") {
      const firstLink = navRef.current.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });
  return (
    <nav className="navbar" aria-label="Main navigation" ref={navRef}>
      <div className="navbar-brand">
        <Link to="/" aria-label="Go to Home">
          Movie App
        </Link>
      </div>
      <ul className="navbar-links" role="menubar">
        <li role="none">
          <Link to="/" role="menuitem" tabIndex={0} aria-label="Home">
            Home
          </Link>
        </li>
        <li role="none">
          <Link
            to="/favorites"
            role="menuitem"
            tabIndex={0}
            aria-label="Favorites"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
