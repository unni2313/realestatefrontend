import React from 'react'
import "./Listing.css"
import Property_card from './Property_card'
function Listing() {
  return (
    <>


    <section className="container py-5">
        <h2 className="mb-4">Property Listings</h2>
        <form className="mb-5">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search plots or locations..."/>
                <button className="btn btn-primary" type="submit">Search</button>
            </div>
        </form>

        <div className="row g-4">
           <Property_card/>
           <Property_card/>
           <Property_card/>
           <Property_card/>
           <Property_card/>
           <Property_card/>

        </div>
    </section>

    <footer className="bg-light text-center py-4 mt-5 border-top">
        <p className="mb-0">&copy; 2025 RealEstateCo. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</>
  )
}

export default Listing
