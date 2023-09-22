import { useState } from 'react';

function Card(props) {
	const cardStyle = {
		border: '5px solid #333',
		borderRadius: '4px',
		backgroundColor: '#add8e6',
		boxShadow: '0 2px 4px rgba(0, 100, 100)',
		height: '800px',
		width: '500px',
		textAlign: 'center',
		margin: '16px',
		padding: '16px',

	};

	const imageStyle = {
		width: '500px',
		height: '400px',
	};

	const textContainerStyle = {
		padding: '16px',
		textAlign: 'justify',
		fontSize: '20px',
	};

	const titleStyle = {
		fontSize: '24px',
	};

	const botonLike = {
		backgroundColor: 'black',
		color: "#fff",
		fontSize: '24px',
		cursor: "pointer",
		borderRadius: "5px",
		boxShadow: '2px 2px 5px rgba(4, 93, 93)',
		margin: "2px",
	}

	const likesStyle = {
		fontSize: '24px',
	}

	const [likes, setLikes] = useState(0);

	return (
		<div style={cardStyle} className="card">
			<h2 style={titleStyle}>{props.title}</h2>
			<div style={textContainerStyle}>
				<p>{props.description}</p>
			</div>
			<img src={props.imageUrl} style={imageStyle} alt="Card" />
			<h4 style={likesStyle}>Likes: {likes}</h4>
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