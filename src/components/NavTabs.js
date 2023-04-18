import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavTabs.css";

function NavTabs() {
  return (
    <ul className="nav nav-tabs topnav">
      <li className="nav-item">
        {/* Used code from 13.3.6 coursework for Navbar layout */}
        {/* NavLink is the same as using an <a> tag e.g <a href="/about">About</a>*/}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="guild"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Guild
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Facilities"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Facilities
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="staff"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Staff
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
