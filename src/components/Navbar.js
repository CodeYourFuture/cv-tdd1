import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
	return (
		<div className="navbar">
			<div className="links">
				<Link to="/" className="navLink">
					Home
				</Link>
				<Link to="/about" className="navLink">
					About
				</Link>
				<Link to="/contact" className="navLink">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
