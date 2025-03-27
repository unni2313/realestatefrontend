import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
 

    <header className="hero">
        <div className="container">
            <h1 className="display-4 fw-bold">Discover Your Perfect Home</h1>
            <p className="lead">Buy, rent, or list properties effortlessly</p>
            <Link to="./Listing"  className="btn btn-primary btn-lg mt-3">View Properties</Link>
        </div>
    </header>

    <section className="container my-5">
        <div className="row text-center">
            <div className="col-md-4">
                <i className="bi bi-building fs-1 text-primary"></i>
                <h4 className="mt-3">Wide Listings</h4>
                <p>Browse premium residential and commercial properties.</p>
            </div>
            <div className="col-md-4">
                <i className="bi bi-currency-dollar fs-1 text-primary"></i>
                <h4 className="mt-3">Best Deals</h4>
                <p>Get market-beating prices and exclusive listings.</p>
            </div>
            <div className="col-md-4">
                <i className="bi bi-person-badge fs-1 text-primary"></i>
                <h4 className="mt-3">Verified Agents</h4>
                <p>Work only with trusted & experienced agents.</p>
            </div>
        </div>
    </section>

    <footer className="bg-light text-center py-4 mt-5 border-top">
        <p className="mb-0">&copy; 2025 RealEstateCo. All rights reserved.</p>
    </footer>

</>
  )
}

export default Home
