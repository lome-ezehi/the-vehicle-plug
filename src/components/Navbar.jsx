import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand fst-italic" href="#">TheCarDealers</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                        isActive ? "active nav-link" : "nav-link"
                    }
                    >Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/cars" className="nav-link">Cars</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/categories" className="nav-link">Categories</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                </ul>
                <Link className="CTA">
                    Order Now
                </Link>
            </div>
        </div>
        </nav>
    )
}
