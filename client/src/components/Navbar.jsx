import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  React.useEffect(() => {}, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    Navigate("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Backend
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {!localStorage.getItem("user") ? (
                <>
                  <Link
                    type="button"
                    className="btn btn-outline-success mx-2"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                  <Link
                    className="btn btn-outline-success mx-2"
                    type="button"
                    to="/login"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <button
                  className="btn btn-outline-success mx-2"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
