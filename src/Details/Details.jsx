import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import Recipe from '../Recipe';
import './details.css';


const Details = ({ title, image, readyInMinutes, servings, extendedIngredients, summary, nutrition }) => {
	const API_KEY = "58095dd45f9b42eca54a4198b72081bd";
	const [ recipe, setRecipe ] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getRecipe();
	}, [ id ]);


	const getRecipe = async () => {
		const response = await fetch(
			`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
		);
		const data = await response.json();
		setRecipe(data);
		console.log(data);
	};

	// "Corn on the Cob in Cilantro and Lime Butter might be just the side dish you are searching for. For <b>$1.2 per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. One serving contains <b>348 calories</b>, <b>3g of protein</b>, and <b>32g of fat</b>. This recipe from Foodista has 1 fans. If you have lime, cilantro, corn on the cob, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free and vegetarian</b> diet. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. This recipe is typical of American cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 20%</b>. This score is rather bad.  Try<a href="https://spoonacular.com/recipes/corn-with-cilantro-lime-butter-366161">Corn with Cilantro-Lime Butter</a>, <a href="https://spoonacular.com/recipes/corn-on-the-cob-with-cilantro-lime-butter-141240">Corn on the Cob with Cilantro-Lime Butter</a>, and <a href="https://spoonacular.com/recipes/grilled-corn-with-cilantro-lime-butter-550264">Grilled Corn with Cilantro Lime Butter</a> for similar recipes."




	return (
		<div>
			<div className="recipe" >
				<h1 className="titleH1" >{ recipe.title }</h1>
				<h3 className="titleH2" >Ready in { recipe.readyInMinutes } minutes <br />
				Serving size: { recipe.servings } </h3>

				<div className="imageDiv" >
					<img className="image" src={ recipe.image } alt="recipe image" />
				</div>

				<div className="summary" >
					<h2 className="summaryH2" >Summary</h2>
					<p dangerouslySetInnerHTML={ { __html: recipe.summary } } /> {/* CHAT WITH PETER ABOUT THIS LINE */ }
				</div>

				<div className="instructions">
					<h2 className="instructionsH2" >Instructions</h2>
					<p dangerouslySetInnerHTML={ { __html: recipe.instructions } } /> {/* CHAT WITH PETER ABOUT THIS LINE */ }
				</div>





			</div>
		</div>
	);
};

export default Details;

/* TODO
1. need to implement navigate feature to go back and fwd.
2. need to loop over
3. best way to stop hitting the api
4.


*/