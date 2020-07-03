import React from "react";
import { BsGear } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h1><BsGear/> Dashboard</h1>
        <div className="btn-group dropdown">
          <button
            type="button"
            className="btn dropdown-toggle btn btn-light btn-large"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Add Startup
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
