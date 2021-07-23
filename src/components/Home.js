import React from 'react';
import shahroz1 from '../images/shahroz1.png';
import shahroz2 from '../images/shahroz2.png';
import shahroz12 from '../images/shahroz12.jpg';
import shahroz11 from '../images/shahroz11.jpg';
import shahroz13 from '../images/shahroz13.jpg';
import shahroz14 from '../images/shahroz14.jpg';
import screen4 from '../images/screen4.png';
import screen5 from '../images/screen5.png';
import '../styles/MainPage.css';
import '../styles/Footer.css';

function Home() {
	return (
		<div>
			<div className="containner">
				<div className="mainPage">
					<h1>Welcome to</h1>
					<div>
						<div>
							<img src={screen4} alt="adv1" />
							<div className="coName1">M&M</div>
							<img src={screen5} alt="adv2" />
						</div>
					</div>
				</div>

				<div className="coName2">RENOVATION</div>
				<div className="coName3">LTD</div>
				<h2>Tell: 020 8445 5468</h2>
				<h2>Mobile: 07453292010</h2>
				<h2>Email: shahrouz74@yahoo.com</h2>
			</div>
			<div className="adver">
				<div>
					<h2> - Leading specialist in Interior Design</h2>
					<h2>- Loft Conversions</h2>
					<h2>- House Eextensions</h2>
					<h2>- Home Refurbishments</h2>
					<h2>- Plumbing & Heating</h2>
					<h2>- Kitchen & Bathroom</h2>
					<h2>- Doors & Windows</h2>
					<h2>- Planning & Architectural Design</h2>
				</div>
			</div>
			<div className="wrapGalery">
				<div className="galery">
					<img src={shahroz11} alt="img4" />

					<img src={shahroz14} alt="img6" />

					<img src={shahroz1} alt="img1" />

					<img src={shahroz2} alt="img5" />

					<img src={shahroz13} alt="img2" />

					<img src={shahroz12} alt="img3" />
				</div>
			</div>

			<div className="footer-wrapper">
				<div className="footer-txt">FOOTER</div>
			</div>
		</div>
	);
}

export default Home;
