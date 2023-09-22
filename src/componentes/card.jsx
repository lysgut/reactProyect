import { useState } from 'react';

function Card(props) {
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
		height: '150px',
	};

	const textContainerStyle = {
		padding: '16px',
		textAlign: 'justify',
		fontSize: '20px',
	};

	const titleStyle = {
		fontSize: '50px',
	};

	const botonLike = {
		backgroundColor: '#adf7df',
		color: "#000",
		fontSize: '29px',
		cursor: "pointer",
		borderRadius: "15px",
		boxShadow: '2px 2px 5px rgba(4, 93, 93)',
		margin: "2px",
		padding: "7px"
	}

	const likesStyle = {
		fontSize: '40px',
	}

	const [likes, setLikes] = useState(0);

	return (
		<div style={cardStyle} className="card">
			<h2 style={titleStyle}>{props.title}</h2>
			<div style={textContainerStyle}>
				<p>{props.description}</p>
			</div>
			<img src={props.imageUrl} style={imageStyle} alt="Card" />
			<h4 style={likesStyle}>♥ {likes}</h4>
			<button
				style={botonLike}
				onClick={() => setLikes(likes + 1)}
			>
				Incrementar Like
			</button>
			<button
				style={botonLike}
				onClick={() => props.eliminarCarta(props.id)}
			>
				Eliminar
			</button>
		</div>
	);
}

export default Card;