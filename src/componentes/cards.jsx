
import React, { useState } from 'react';
import Card from './card';
import { useFormContext } from './FormContext';

function Cards() {
  const { isFormOpen, setIsFormOpen } = useFormContext();
  const [onePieceCharacters, setOnePieceCharacters] = useState([
    {
      title: 'Luffy',
      description:
        'Monkey D. Luffy es un pirata que busca convertirse en el Rey de los Piratas y obtuvo los poderes de la Fruta del Diablo Gomu Gomu, lo que le permite estirar su cuerpo como goma.',
      imageUrl: 'https://th.bing.com/th/id/R.1e3154071a7126fb4306e69583bb3a88?rik=%2fxWnzySDrq7KwQ&pid=ImgRaw&r=0',
      id: 1,
      tripulacion: 'Mugiwara' 
    },
    {
      title: 'Roronoa Zoro',
      description:
        'Roronoa Zoro es el espadachín principal de la tripulación de Luffy. Utiliza un estilo de tres espadas y busca convertirse en el mejor espadachín del mundo.',
      imageUrl: 'https://i.pinimg.com/originals/72/9e/0f/729e0ffe67564a0f74fbbb596e8c96c1.jpg',
      id: 2,
      tripulacion: 'Mugiwara'
    },
    {
      title: 'Nami',
      description:
        'Nami es la navegante de la tripulación de Luffy. Es una cartógrafa talentosa y busca crear el mapa del mundo completo.',
      imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--8xKH2bsp--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1596822882/production/designs/12884397_0.jpg',
      id: 3,
      tripulacion: 'Mugiwara' 
    },
    {
      title: 'Usopp',
      description:
        'Usopp es el tirador de la tripulación de Luffy. Es conocido por contar historias exageradas y busca convertirse en un valiente guerrero del mar.',
      imageUrl: 'https://www.isla-pirata.com/wp-content/uploads/2021/10/jolly-roger-usopp-one-piece-1396x800.jpg',
      id: 4,
      tripulacion: 'Mugiwara' 
    },
    {
      title: 'Sanji',
      description:
        'Sanji es el cocinero de la tripulación de Luffy y un experto en artes marciales basadas en las piernas. También es conocido como "Black Leg Sanji".',
      imageUrl: 'https://res.cloudinary.com/teepublic/image/private/s--9FfP7DVz--/t_Preview/b_rgb:36538b,c_lpad,f_jpg,h_630,q_90,w_1200/v1576253600/production/designs/7182522_0.jpg',
      id: 5,
      tripulacion: 'Mugiwara' 
    },
    {
      title: 'Nico Robin',
      description:
        'Nico Robin es la arqueóloga de la tripulación de Luffy y una experta en historia antigua. Busca descubrir el "True History".',
      imageUrl: 'https://th.bing.com/th/id/R.3fb41ce266bedaa20c5ddc22b23e0551?rik=KI524vYUkMHQ5Q&pid=ImgRaw&r=0',
      id: 6,
      tripulacion: 'Mugiwara' 
    },
    {
      title: 'Franky',
      description:
        'Franky es el carpintero y el ingeniero de la tripulación de Luffy. Él construyó el barco Thousand Sunny y tiene un cuerpo cibernético.',
      imageUrl: 'https://th.bing.com/th/id/R.b9235b4785f310cae478cf41ab67e79e?rik=beLG7JLIRXmbnA&riu=http%3a%2f%2fimg00.deviantart.net%2ff30e%2fi%2f2009%2f225%2f5%2f4%2ffranky_jolly_roger_by_carlossakura.png&ehk=nEKOKbcFDRkZYQmLXoDT4g9n94JqRz79QsX8bx6R9xQ%3d&risl=&pid=ImgRaw&r=0',
      id: 7,
      tripulacion: 'Mugiwara' 
    },
    {
      title: 'Brook',
      description:
        'Brook es el músico esqueleto de la tripulación de Luffy. Puede revivir después de morir gracias a los poderes de la Fruta Revive-Revive.',
      imageUrl: 'https://img00.deviantart.net/2d09/i/2009/232/1/b/brook_jolly_roger_by_carlossakura.png',
      id: 8,
      tripulacion: 'Mugiwara' 
    },
  ]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const createNewCard = (newCardData) => {
    const newCard = {
      title: newCardData.title,
      description: newCardData.description,
      imageUrl: newCardData.imageUrl,
      id: onePieceCharacters.length + 1, // Asignar un ID único
      tripulacion: newCardData.tripulacion || 'Mugiwara' // Por defecto, si no se proporciona tripulación
    };
    
  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    margin: '50px',
    justifyContent: 'center',
  };

  const deleteCard = (id) => {
    const updatedCharacters = onePieceCharacters.filter((character) => character.id !== id);
    setOnePieceCharacters(updatedCharacters);
  };

  setOnePieceCharacters([...onePieceCharacters, newCard]);
  setIsFormOpen(false); // Cerrar el formulario después de agregar la tarjeta
};

return (
  <div className="card-grid">
    {isFormOpen && (
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newCardData = {
              title: formData.get('title'),
              description: formData.get('description'),
              imageUrl: formData.get('imageUrl'),
              tripulacion: formData.get('tripulacion')
            };
            createNewCard(newCardData);
          }}
        >
          <input type="text" name="title" placeholder="Título" />
          <textarea name="description" placeholder="Descripción" />
          <input type="text" name="imageUrl" placeholder="URL de la imagen" />
          <input type="text" name="tripulacion" placeholder="Tripulación" />
          <button type="submit">Crear Tarjeta</button>
          <button type="button" onClick={closeForm}>Cancelar</button>
        </form>
      </div>
    )}

    {onePieceCharacters.map((character) => (
      <Card
        key={character.id}
        title={character.title}
        description={character.description}
        id={character.id}
        tripulacion={character.tripulacion}
        imageUrl={character.imageUrl}
        eliminarCarta={deleteCard}
      />
    ))}
  </div>
);
};

export default Cards;