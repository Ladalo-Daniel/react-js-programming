import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Assets/img/img1.jpg',
    '/Assets/img/img2.jpg',
    '/Assets/img/img3.jpg',
    '/Assets/img/img4.jpg'
  ];

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 3000); // Auto slide every 3 seconds

    return () => {
      clearInterval(timer); // Clean up the timer when the component is unmounted
    };
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
      <div className='container-slide'>
         <div className="slider">
           <button className="slider-button" onClick={goToPreviousSlide}>&lt; Previous </button>
           <img className="slide-image" src={images[currentIndex]} alt="Slide" />
           <button className="slider-button" onClick={goToNextSlide}>Next &gt;</button>
          </div>
          <div className='description'>
             <marquee> <h2>Welcome toTravel Home...</h2></marquee>
             <Typewriter text= "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated. " />

          </div>
      </div>
  );
};


/*
     import React, { useState, useEffect } from 'react';

const SlideComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
        const data = await response.json();

        const fetchedImages = data.data.recipes.map(recipe => ({
          publisher: recipe.publisher,
          image_url: recipe.image_url,
          title: recipe.title,
          id: recipe.recipe_id
        }));

        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="slide-container">
      {images.map(image => (
        <div key={image.id} className="slide">
          <img src={image.image_url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default SlideComponent;
   
*/