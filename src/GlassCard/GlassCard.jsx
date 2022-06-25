import React from 'react';
import './glassCard.css';

// const GlassCard = () => {
// 	return (
// 		<div>
// 			<h1>I am the GlassCard component</h1>
// 		</div>
// 	);
// };

// export default GlassCard;



function Card () {
	return (
		<div className="card">
			<div className="card__body">
				<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
				<h2 className="card__title"></h2>
				<p className="card__description">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
				</p>
			</div>
			<button className="card__btn">View Recipe</button>
		</div>
	);
}

export default Card;
