import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../Nav/nav.css';




const Nav = () => {
	return (
		<div className="nav-parent" >
			<div className="nav-logo">
				<h2  >Epicer-Recipe</h2>
			</div>
			<nav className="nav-items">
				<ul className="nav-ul">
					<li>
						<Link to='/' >Home</Link>
					</li>
					<li>
						<Link to='/details' >Details</Link>
					</li>
					<li>
						<Link to='/about' >About</Link>
					</li>
				</ul>
			</nav>
		</div>
	);

};

export default Nav;


/* return (
	<nav>
		<div className="navLogo" >
			<a href="/"><img width="140px" src={ Logo } alt="logo image" /></a>
			<div className="navLinks">
				<a href="/"><span>Home</span></a>
				<span>|</span>
				<a href="/exercises"><span>Browse Workouts</span></a>
				<span>|</span>
				<a href="/create-account"><span>Create Account</span></a>
				<span>|</span>
				<a href="/signin"><span>Sign In</span></a>
			</div>
		</div>
		<hr />
	</nav>
); */

/*
===============TODO============
- add font styles from google
- fix logo to nav home
*/