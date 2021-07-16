import React from 'react';
import screen2 from '../images/screen2.png';
import '../styles/MainPage.css';

function Home() {
	return (
		<div className="mainPage">
			<h1>Welcome to the Website</h1>
			<img src={screen2} alt="img1" />
		</div>
	);
}

export default Home;
