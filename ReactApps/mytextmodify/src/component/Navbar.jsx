import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {



  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${(props.mode === 'Enable Dark Mode'?'light':'dark')} bg-${(props.mode === 'Enable Dark Mode'?'light':'dark')}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.logo}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>

              {/* dark mode  */}
              <div className={`form-check form-switch my-2 mx-20 text-${props.mode==='Enable Dark Mode'?'dark':'light'}`} >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggle}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {props.mode}
                </label>
              </div>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  logo: "Set logo Title",
  home: "Home text here",
};
