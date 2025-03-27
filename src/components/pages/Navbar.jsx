import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div className="container">
        <a className="navbar-brand text-primary" href="index.html">RealEstateCo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link " to="/">Home</Link>
                    </li>

                <li className="nav-item"><Link className="nav-link " to="./Listing">Properties</Link>
                    </li>

                <li className="nav-item"><Link className="nav-link " to="./add_property">Add Property</Link>
                    </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar
