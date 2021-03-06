import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Recipe from '../Recipe';
import './home.css';



const RecipeDetails = ({ title, image, totalIngredients, ingredients }) => {
	const API_KEY = "58095dd45f9b42eca54a4198b72081bd";
	// let url = "https://api.spoonacular.com/recipes/findByIngredients";
	let numItems = 10;

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState("");
	const [ query, setQuery ] = useState("");

	useEffect(() => {
		getRecipes();
	}, [ query ]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&sort=max_used_ingredients&number=${numItems}&apiKey=${API_KEY}`
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


	return (
		<div>
			<h1>Enter food items below to get amazing recipes!!</h1> {/* this will be a nav component */ }
			<form className="search-form" onSubmit={ getSearch } >
				<input className="search-bar" type="text" placeholder="Enter food items here (ex. chicken, rice, beans)" value={ search } onChange={ updateSearch } />
				<button className="search-button btn btn-primary"  >Search</button>
			</form>

			<div className="recipes" >
				{ recipes && recipes.map((recipe) => (
					<Recipe
						id={ recipe.id }
						title={ recipe.title }
						image={ recipe.image }
						likes={ recipe.likes }
						usedIngredientCount={ recipe.usedIngredientCount }
						usedIngredients={ recipe.usedIngredients }
						missedIngredientCount={ recipe.missedIngredientCount }
						missedIngredients={ recipe.missedIngredients }
					/>
				)) }
			</div>
		</div>
	);
};

export default RecipeDetails;
