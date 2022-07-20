import React from "react";
import { Link } from "react-router-dom";
import "./home-nav.css";
import Logo from "../../images/Logo.jpeg";

const HomeNavbar = () => {
  return (
    <>
      <div className="homenavcont">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div>
          <ul className="links">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
