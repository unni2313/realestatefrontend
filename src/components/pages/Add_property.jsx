import React from 'react'
import "./Add_property.css"
import { useState } from 'react'
import axios from 'axios'
function Add_property() {
    const [property,setproperty] =useState(
        {
            title:"",
            desc:"",
            location:"",
            price: ""
        }
    )
    const handleChange= (e) => {
        setproperty({...property,[e.target.name]:e.target.value})

    }
    const handleSubmit= async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/intemInserting" ,property)//api endpoint 
            alert("successfully laoded")
        }
        catch(e)
        {
            console.log(e)
        }
    }
  return (
    <>


    <section className="container py-5">
        <h2 className="mb-4">Add a New Property</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Property Title</label>
                <input type="text" name='title' value={property.title}  onChange={handleChange}  className="form-control" placeholder="e.g. Modern Villa in Downtown"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name='price' value={property.price}  onChange={handleChange} className="form-control" placeholder="e.g. 500000"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Location</label>
                <input type="text" name='location' value={property.location} onChange={handleChange}  className="form-control" placeholder="e.g. New York City, NY"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" value={property.desc} onChange={handleChange}  name='desc' rows="4" placeholder="Describe the property..."></textarea>
            </div>
            {/* <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <input type="file" className="form-control"/>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit Property</button>
        </form>
    </section>

    <footer className="bg-light text-center py-4 mt-5 border-top">
        <p className="mb-0">&copy; 2025 RealEstateCo. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</>
  )
}

export default Add_property
