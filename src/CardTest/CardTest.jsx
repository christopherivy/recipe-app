import React from 'react';
import './cardTest.css';

const CardTest = () => {
	return (
		<div className="card-div" >
			<div className="image-container">
				<img className="img" src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="image" />
				<p>Recipe info here</p>
			</div>
			<div className="summary-div" >
				<div className="card-title" >
					<h2>
						Title
				</h2>

				</div>
				<div className="card-body" >
					<p>
						1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
					2. Provident quia eligendi tempora quis tempore magnam sapiente eum vero.<br />
					3. Perferendis, molestiae distinctio.<br />
					4. Ipsum molestias praesentium, inventore illo sunt similique optio odit.
				</p>
				</div>
			</div>
		</div>
	);
};

export default CardTest;
