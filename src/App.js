import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Records from './data2.json';
import axios from "axios";
import Recipe from "./Recipe";
import RecipeDetails from './Home/Home';
import { Button } from 'reactstrap';
import Nav from './Nav/Nav';
import About from '../src/About/About';
import Home from '../src/Home/Home';
import Details from './Details/Details';
import CardTest from './CardTest/CardTest';
import '../src/CardTest/CardTest';




/* 
random ppl api
// api key BV7Z-8AEA-Q23U-E903
// ref q17994xn
*/

// https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken&number=10&apiKey=58095dd45f9b42eca54a4198b72081bd

const App = () => {

	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/details/:id' element={ <Details /> } />
					<Route path='/about' element={ <About /> } />
				</Routes>
				<div className="card-container"  >
					<CardTest />
					<CardTest />
					<CardTest />
					<CardTest />

				</div>

			</div>
		</Router >
	);
};

export default App;
