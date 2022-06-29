import React from 'react';
// import style from './recipe.module.css';
import "./recipe.css";
import { NavLink, Link } from 'react-router-dom';

const Recipe = ({ title, image, id, likes, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients }) => {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src={ image } alt="" />
			</div>
			<div className="card-title">
				<h3><Link to={ `/details/${id}` } > { title } </Link></h3>
				<p>Uses <b>{ usedIngredientCount } </b>of your ingredients.</p>
				<p>There are <b>{ missedIngredientCount } </b>other ingredients. </p>
			</div>
			<div className="card-body">
				<p>  </p>
			</div>
			<div className="btn">

			</div>
		</div>
	);
};

export default Recipe;






/*

return (
		<div className="card-div" >
			<div className="image-container">
				<img className="img" src="" />
				<p>Recipe info here</p>
			</div>
			<div className="summary-div" >
				<div className="card-title" >
					<h2>
						<Link to={ `/details/${id}` } > { title } </Link>
					</h2>

				</div>
				<div className="card-body" >
					<p>
						Total Ingredients:{ totalIngredients }
					</p>
				</div>
			</div>
		</div>

		<div className={ style.recipe }>
			<h2>
				<Link className={ style.title } to={ `/details/${id}` } > { title } </Link>
			</h2>
			<h2 className="recipe-title" > { title } </h2	>
			<p>Total Ingredients:{ totalIngredients }</p>
			<ol>
				{ ingredients.map(ingredient => (
					<li>{ ingredient.name }</li>
				)) }
			</ol>
			<img className={ style.image } src={ image } alt="" />
		</div>
	);
*/