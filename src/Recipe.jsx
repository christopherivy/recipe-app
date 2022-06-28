import React from 'react';
import style from './recipe.module.css';
import { NavLink, Link } from 'react-router-dom';

const Recipe = ({ title, image, totalIngredients, ingredients, id }) => {
	return (
		<div className="card-div" >
			<div className="image-container">
				<img className="img" src={ image } />
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


	);
};

export default Recipe;
