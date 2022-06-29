import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import Recipe from '../Recipe';
import Ingredient from '../Ingredient/Ingredient';
import './details.css';


const Details = ({ title, image, readyInMinutes, servings, extendedIngredients, summary, nutrition }) => {
	const API_KEY = "58095dd45f9b42eca54a4198b72081bd";
	const [ recipe, setRecipe ] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getRecipe();
	}, [ id ]);

	// useEffect(() => {
	// 	getRecipe();
	// }, []);

	const getRecipe = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
		);
		const data = await response.json();
		setRecipe(data);
		console.log(data);
	};



	return (
		<div>
			<div className="recipe" >
				<h1 className="titleH1" >{ recipe.title }</h1>
				<h3 className="titleH2" >Ready in { recipe.readyInMinutes } minutes <br />
				Serving size: { recipe.servings } </h3>

				<div className="imageDiv" >
					<img className="image" src={ recipe.image } alt="recipe image" />
				</div>


				{/* ============== SUMMARY SECTION  ============== */ }
				<div className="summary" >
					<h2 className="titleH2" >Summary</h2>
					<p dangerouslySetInnerHTML={ { __html: recipe.summary } } /> {/* CHAT WITH PETER ABOUT THIS LINE */ }
				</div>




				{/* ============== INSTRUCTION SECTION  ============== */ }
				<div className="new">

					<div className="ingredients">
						<h2 className="titleH2" >Ingredients</h2>
						<div >
							{ recipe && recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient) => (
								<p className="ingredient">   { ingredient.original } </p	>
							)) }
						</div>
					</div>
				</div>

				{/* ============== INSTRUCTION SECTION  ============== */ }
				<div className="instructions">
					<h2 className="titleH2" >Instructions</h2>
					<p dangerouslySetInnerHTML={ { __html: recipe.instructions } } /> {/* CHAT WITH PETER ABOUT THIS LINE */ }
				</div>



				{/* <div > ============== not sure why these rows and headers not working
					<table className="extras">
						<tr>
							<td>Gluten Free</td>
							<td>{ recipe.glutenFree } why not working</td> 
						</tr>
						<tr>
							<td>Vegan</td>
							<td>{ recipe.vegan }</td>
						</tr>
						<tr>
							<td>Very Healthy</td>
							<td>{ recipe.title }</td> 
						</tr>

					</table>
				</div> */}





			</div>
		</div>
	);
};

export default Details;

/* TODO
1. need to implement useNavigate feature to go back and fwd.
3. best way to stop hitting the api
4. go over classname extras with on demand mentor not pulling the correct api data but is pulling other info not needed


*/