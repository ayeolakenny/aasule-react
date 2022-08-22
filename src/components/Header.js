import { Link, NavLink } from "react-router-dom";

export const Header = () => (
  <header id="site-header" className="header fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg stroke">
        <a className="navbar-brand" href="index.html">
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              alt="Your logo"
              title="Your logo"
              style={{ height: "50px" }}
            />
          </Link>
        </a>
        <button
          className="navbar-toggler collapsed bg-gradient"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon fa icon-expand fa-bars" />
          <span className="navbar-toggler-icon fa icon-close fa-times" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-lg-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item mr-lg-5">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link text-danger" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <div className="search-right ml-xl-5 mr-xl-0 mr-lg-3"></div>
          </ul>
        </div>
        {/* <div className="mobile-position">
          <nav className="navigation">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="mode-container">
                  <i className="gg-sun" />
                  <i className="gg-moon" />
                </div>
              </label>
            </div>
          </nav>
        </div> */}
      </nav>
    </div>
  </header>
);
