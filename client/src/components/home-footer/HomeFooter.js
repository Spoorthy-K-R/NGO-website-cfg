import React from "react";
import Logo from "../../images/Logo.jpeg";
import "./HomeFooter.css";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className="footercontainer">
      <div className="imagecontainer">
        <img src={Logo} alt="" />{" "}
      </div>
      <div className="footerinnercontainer">
        <ul className="footerlinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="footerlinks">
          <li>
            <Link to="/student">For students</Link>
          </li>
          <li>
            <Link to="/company">For companies</Link>
          </li>
        </ul>
        <ul className="footerlinks">
          <li>
            <Link to="/entrepreneur">For entrepreneurs </Link>
          </li>
          <li>
            <Link to="/investor">For investors </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeFooter;
