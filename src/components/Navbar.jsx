import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fst-italic" to="/">TheCarDealers</Link>
                
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                        }
                    >Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/inventory" className="nav-link">Inventory</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/financing" className="nav-link">Financing</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                </ul>

                <Link to="/order" className="btn btn-primary">
                    Book a Test Drive
                </Link>
                </div>
            </div>
        </nav>
    )
}
