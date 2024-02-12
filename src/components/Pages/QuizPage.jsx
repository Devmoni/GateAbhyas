import React, { useState, useEffect } from 'react';

const QuizPage = () => {
  const [timer, setTimer] = useState(10800);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([
    'https://via.placeholder.com/450',
  ]); // Placeholder images

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(images.length / 4)));
  };

  return (
    <div>
      <header className='Quiz-header'>
        <h1>Gate Abhyaas</h1>
        <div className='timer'>{formatTime(timer)}</div>
      </header>
      <div className="images-container">
        {images.slice((currentPage - 1) * 4, currentPage * 4).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNextClick} disabled={currentPage === Math.ceil(images.length / 4)}>Next</button>
      </div>
    </div>
  );
};

export default QuizPage;
