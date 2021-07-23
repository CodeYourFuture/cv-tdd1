import React from 'react';
import { Link } from 'react-router-dom';
import logoShahroz from '../images/logoShahroz.png';
import '../styles/Navbar.css';
function Navbar() {
	return (
		<div className="header">
			<div className="nav">
				<img src={logoShahroz} alt="logo" />

			</div>
		</div>
	);
}

export default Navbar;
