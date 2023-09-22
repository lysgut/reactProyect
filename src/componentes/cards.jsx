
import React, { useState } from 'react';
import Card from './card';

function Cards() {
  const [pokemons, setPokemons] = useState([
    {
			title: 'Pikachu',
			description:
				'Pikachu es un Pokémon de tipo eléctrico introducido en la primera generación. Es el Pokémon más conocido de la historia, debido a ser el acompañante del protagonista del anime, Ash Ketchum, y la mascota representante de la franquicia Pokémon.',
			imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      id: 1
		},
		{
			title: 'Charmander',
			description:
				'Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que puede elegir el jugador al comenzar la aventura en las regiones Kanto y Johto.',
			imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      id: 2
		},
		{
			title: 'Squirtle',
			description:
				'Squirtle es un Pokémon de tipo agua introducido en la primera generación. Es uno de los Pokémon iniciales que puede elegir el jugador al comenzar la aventura en las regiones Kanto y Johto.',
			imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      id: 3
		},
		{
			title: 'Bulbasaur',
			description:
				'Bulbasaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que puede elegir el jugador al comenzar la aventura en las regiones Kanto y Johto.',
			imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      id: 4
		},
    {
      title: 'Mewtwo',
      description: 'Mewtwo es un Pokémon legendario de tipo psíquico introducido en la primera generación. Es uno de los Pokémon más conocidos y famosos, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      id: 5
    },
    {
      title: 'Mew',
      description: 'Mew es un Pokémon singular de tipo psíquico introducido en la primera generación. Es uno de los Pokémon más conocidos y famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      id: 6
    },
    {
      title: 'Gengar',
      description: 'Gengar es un Pokémon de tipo fantasma/veneno introducido en la primera generación. Es la evolución final de Gastly. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      id: 7
    },
    {
      title: 'Dragonite',
      description: 'Dragonite es un Pokémon de tipo dragón/volador introducido en la primera generación. Es la evolución final de Dratini y Dragonair. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      id: 8
    },
    {
      title: 'Gyarados',
      description: 'Gyarados es un Pokémon de tipo agua/volador introducido en la primera generación. Es la evolución de Magikarp. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
      id: 9
    },
    {
      title: 'Arcanine',
      description: 'Arcanine es un Pokémon de tipo fuego introducido en la primera generación. Es la evolución de Growlithe. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
      id: 10    },
    {
      title: 'Alakazam',
      description: 'Alakazam es un Pokémon de tipo psíquico introducido en la primera generación. Es la evolución de Kadabra. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
      id: 11
    },
    {
      title: 'Machamp',
      description: 'Machamp es un Pokémon de tipo lucha introducido en la primera generación. Es la evolución de Machoke. Es uno de los Pokémon más famosos de la historia, siendo el protagonista de la primera película.',
      imageUrl: "../public/imagen1.jpeg",
      id: 12
    },

  ]);

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    margin: '50px',
    justifyContent: 'center',
  };

  const deleteCard = (id) => {
    const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(updatedPokemons);
  };

  return (
    <div style={cardGridStyle}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.title}
          title={pokemon.title}
          description={pokemon.description}
          id={pokemon.id}
          imageUrl={pokemon.imageUrl}
          eliminarCarta={deleteCard}
        />
      ))}
    </div>
  );
}

export default Cards;
