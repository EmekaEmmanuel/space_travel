import React from 'react';
import '../css/Nav.css';
import { NavLink } from 'react-router-dom';
import spaceLogo from '../img/logo.png';

function Nav() {
  return (
    <div className="app_container">
      <header className="nav_container">
        <div className="nav_logo_box">
          <figure className="logo_figure">
            <img className="logo_img" src={spaceLogo} alt="space travel logo" />
          </figure>
          <h1>Space Travelers&apos; Hub</h1>
        </div>

        <nav className="nav_list">
          <li className="nav_item">
            <NavLink to="/" activeClassName="active" className="td_none nav_link">Rockets </NavLink>
          </li>

          <li className="nav_item" />

          <li className="nav_item ">
            <NavLink to="/Missions" activeClassName="active" className="td_none nav_link">Missions </NavLink>
          </li>

          <li className="nav_item vertical_line" />

          <li className="nav_item">
            <NavLink to="/MyProfile" activeClassName="active" className="td_none nav_link">My Profile </NavLink>
          </li>
        </nav>
      </header>
    </div>

  );
}

export default Nav;
