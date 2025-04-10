// components/StarRating.tsx
'use client';

import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState<number>(0);
  
  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };
  
  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  
  const handleClick = (index: number) => {
    onRatingChange(index);
  };
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          type="button"
          className="text-2xl focus:outline-none mx-1"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <span className={`${
            (hoverRating || rating) >= index
              ? 'text-yellow-400'
              : 'text-gray-300'
          }`}>
            ★
          </span>
        </button>
      ))}
    </div>
  );
};

export default StarRating;