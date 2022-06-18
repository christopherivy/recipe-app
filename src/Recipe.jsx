import React from 'react';
import style from './recipe.module.css';
import { NavLink, Link } from 'react-router-dom';

const Recipe = ({ title, image, totalIngredients, ingredients, id }) => {
	return (

		<div className={ style.recipe }>
			<h2>
				<Link className={ style.title } to={ `/details/${id}` } > { title } </Link>
			</h2>
			{/* <h2 className="recipe-title" > { title } </h2	> */ }
			<p>Total Ingredients:{ totalIngredients }</p>
			<ol>
				{ ingredients.map(ingredient => (
					<li>{ ingredient.name }</li>
				)) }
			</ol>
			<img className={ style.image } src={ image } alt="" />
		</div>
	);
};

export default Recipe;
