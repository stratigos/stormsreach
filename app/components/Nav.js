import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Stateless Functional Component to display available navigation.
 */
const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/housing">
          Housing
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/crafting">
          Crafting
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/community">
          Community
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
