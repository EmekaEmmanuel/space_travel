import React from 'react';
import '../css/Nav.css';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="td_none nav_link">Rockets </Link>
          </li>

          <li className="nav_item" />

          <li className="nav_item vertical_line">
            <Link to="/Missions" className="td_none nav_link">Missions </Link>
          </li>

          <li className="nav_item" />

          <li className="nav_item">
            <Link to="/MyProfile" className="td_none nav_link">My Profile </Link>
          </li>
        </nav>
      </header>
    </div>

  );
}

export default Nav;
