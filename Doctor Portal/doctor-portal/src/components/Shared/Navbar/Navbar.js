import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#" style={{marginLeft:'120px'}}>Doctor Information Portal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Doctor Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/appointment">Patient</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/contactUs">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
};

export default Navbar;
