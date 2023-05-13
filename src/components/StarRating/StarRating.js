import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function StarRating(props) {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    if (props.id === 0) {
      setRating(rate);
      console.log('bina');
      localStorage.setItem('bina', JSON.stringify(rate));
    } else {
      setRating(rate);
      console.log('sahip');
      localStorage.setItem('sahip', JSON.stringify(rate));
    }
  };

  const handleReset = () => {
    // Set the initial value
    setRating(0);
    console.log(rating);
  };

  return (
    <div>
      <Rating onClick={handleRating} initialValue={rating} />
    </div>
  );
}
