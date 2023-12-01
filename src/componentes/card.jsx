import React, { useState } from 'react';

function Card(props) {
	const [likes, setLikes] = useState(0);

	const handleLike = () => {
		setLikes(likes + 1);
	};

	const cardStyle = {
		border: '10px solid ',
		borderRadius: '78px',
		backgroundColor: '#daddda',
		boxShadow: '10 22px 470px rgba(0,0,0)',
		height: '600px',
		width: '500px',
		textAlign: 'center',
		margin: '16px',	
		padding: '16px',
	};

	const imageStyle = {
		width: '220px',
		height: '130px',
	};

	const textContainerStyle = {
		padding: '16px',
		textAlign: 'justify',
		fontSize: '20px',
	};

	const tripStyle = {
		margin: '0px',
		textAlign: 'justify',
		fontSize: '25px'
	};

	const titleStyle = {
		fontSize: '50px',
		textAlign: 'justify'
	};

	const botonDelete = {
		position: 'absolute',
		top: '10px', 
		right: '10px', 
		height: '60px',
		backgroundColor: '#FF0000',
		color: "#FFF",
		fontSize: '29px',
		cursor: "pointer",
		borderRadius: "15px",
		boxShadow: '2px 2px 5px rgba(4, 93, 93)',
		margin: "2px",
		padding: "7px"
	};

	const cardContent = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'justify',
		position: 'relative'
	};

	const tt = {
		display: 'flex',
		flexDirection: 'column',
	};

	const buttonsContent = {
		display: 'flex',
		gap: '16px',
	};

	const likesStyle = {
		fontSize: '40px',
	};

	return (
		<div style={cardStyle} className="card">
			<div style={cardContent}>
				<div style={tt}>
					<h2 style={titleStyle}>{props.title}</h2>
					<h5 style={tripStyle}>Tripulación: {props.tripulacion}</h5>
				</div>
				<div style={buttonsContent}>
					<button
						style={botonDelete}
						onClick={() => props.eliminarCarta(props.id)}
					>
						X
					</button>
				</div>
			</div>
			<div style={textContainerStyle}>
				<p>{props.description}</p>
			</div>
			<img src={props.imageUrl} style={imageStyle} alt="Card" />
			<h4 style={likesStyle} onClick={handleLike}> ♥ {likes}</h4>
		</div>
	);
}

export default Card;
