import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, image, totalIngredients, ingredients }) => {
	return (
		<div className={ style.recipe }>
			<h2 className="recipe-title" >{ title }</h2	>
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
