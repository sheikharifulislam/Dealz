import React, { useState } from 'react';

const StarRating = ({ readonly, size }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? 'on' : 'off'}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span
                            className={`star ${
                                readonly ? 'text-yellow-500' : ''
                            }`}
                            style={{
                                fontSize: size ? `${size}px` : '20px',
                            }}
                        >
                            &#9733;
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;
