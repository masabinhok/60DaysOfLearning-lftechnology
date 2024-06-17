import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      style={{
        backgroundColor: props.mode === "light" ? "white" : "black",
      }}
      className={`navbar navbar-expand-lg text-${props.mode}`}
    >
      <div className="container-fluid">
        <a
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
          className="navbar-brand"
          href="/"
        >
          {props.title}
        </a>
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
              <a
                style={{
                  color: props.mode === "light" ? "black" : "white",
                }}
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{
                  color: props.mode === "light" ? "black" : "white",
                }}
                className="nav-link"
                href="/"
              >
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Define prop types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

// Define default props
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
