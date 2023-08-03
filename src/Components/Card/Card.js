// Card.js
import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg w-64 m-4">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

export default Card;
