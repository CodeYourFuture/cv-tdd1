import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import '../styles/Navbar.css';
function Navbar() {
	return (
		<div className="header">
			<div className="nav">
				<img src={logo1} alt="logo" />

			</div>
		</div>
	);
}

export default Navbar;
