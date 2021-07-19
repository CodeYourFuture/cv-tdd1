import React from 'react';
import { Link } from 'react-router-dom';
import shahroz9 from '../images/shahroz9.jpg';
import '../styles/Navbar.css';
function Navbar() {
	return (
		<div className="header">
			<div className="nav">
				<img src={shahroz9.jpg} alt="logo" />
				<ul>
					<li>
						<Link to="/" className="navLink">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="navLink">
							About
						</Link>
					</li>
					<li>
						<Link to="/contact" className="navLink">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
