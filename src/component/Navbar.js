import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand mx-2" href="#">
          {props.text}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Router>
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
              </Router>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototype = {
  text: PropTypes.string,
  item: PropTypes.string,
};
Navbar.defaultProps = {
  text: "Textutils",
  item: "item",
};
