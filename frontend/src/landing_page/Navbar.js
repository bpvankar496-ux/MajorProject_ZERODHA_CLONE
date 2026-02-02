import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    

    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
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
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary ms-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
  className="btn btn-danger ms-2"
  onClick={() => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }}
>
  Logout
</button>

    </nav>
  );
};

export default Navbar;
