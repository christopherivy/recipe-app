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



/* 
random ppl api
// api key BV7Z-8AEA-Q23U-E903
// ref q17994xn
*/

// https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken&number=10&apiKey=58095dd45f9b42eca54a4198b72081bd

const App = () => {
	/* const API_KEY = "58095dd45f9b42eca54a4198b72081bd";
	let url = "https://api.spoonacular.com/recipes/findByIngredients";
	let numItems = 10;

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState(" ");
	const [ query, setQuery ] = useState("");

	useEffect(() => {
		getRecipes();
	}, [ query ]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=${numItems}&apiKey=${API_KEY}`
		);
		const data = await response.json();
		setRecipes(data);
		console.log(data);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = e => {
		e.preventDefault(); // stops page refresh
		setQuery(search);
		setSearch('');
	};
 */


	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/details' element={ <Details /> } />
					<Route path='/about' element={ <About /> } />
				</Routes>

				{/* <h1>Enter a food item below to get amazing recipes!!</h1> 
				<form className="search-form" onSubmit={ getSearch } >
					<input className="search-bar" type="text" placeholder="Enter a food item here" value={ search } onChange={ updateSearch } />
					<button className="search-button btn btn-primary"  >Search</button>
				</form>


				<div className="recipes" >
					{ recipes.map((recipe) => (
						<Recipe
							key={ recipe.id }
							title={ recipe.title }
							totalIngredients={ recipe.missedIngredientCount }
							image={ recipe.image }
							ingredients={ recipe.missedIngredients }
						/>
					)) }
				</div> */}
			</div>
		</Router >
	);
};

export default App;
