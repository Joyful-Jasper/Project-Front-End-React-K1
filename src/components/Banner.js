import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="banner">
			<h1>Try the virtual library explorer</h1>
			<p>Look for the availability of books you want to borrow without having to go around the library.</p>
			<div className="btn-in-banner">
				<Link to="/history">
					<button className="btn-in-banner-borrowed">Borrowed book</button>
				</Link>
				<button className="btn-in-banner-waiting">Waiting list</button>
			</div>
		</div>
	);
};

export default Banner;
