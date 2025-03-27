import React from 'react'

function Property_card() {
  return (
    <div className="col-md-4">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="House"/>
                    <div className="card-body">
                        <h5 className="card-title">Modern Family House</h5>
                        <p className="card-text">$500,000 • 3 Beds • 2 Baths • 1,800 sqft</p>
                        <a href="#" className="btn btn-outline-primary btn-sm">View Details</a>
                    </div>
                </div>
            </div>
  )
}

export default Property_card
