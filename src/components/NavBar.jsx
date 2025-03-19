import React from 'react'
import "./Navbar.css"
function NavBar(pros) {
  return (
    <header>
    <div class="logo">{props.name}</div>
    <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </header>
  )
}
export default NavBar

