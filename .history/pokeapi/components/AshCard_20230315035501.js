import { useState } from 'react';
import "tailwindcss/tailwind.css";

export default function AshCard({
  name,
  image,
  image2,
  status,
  evolution,
  caught,
  location
}) 

  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden ">
        <div className='flex'>
          <img className="w-32 mx-auto" src={image2}/>
          <h2 className="text-center font-bold text-2xl mt-11">Ash Pokemon</h2>
          <img className="w-32 mx-auto" src={showImage ? image : image2} alt={name} onClick={toggleImage} />
        </div>
        {showImage && (
          <div className="px-4 py-2 justify-center text-center">
            <p className="font-medium text-white">Status: {status}</p>
            <p className="font-medium text-white">Evolution: {evolution}</p>
            <p className="font-medium text-white">Caught: {caught}</p>
            <p className="font-medium text-white">Location: {location}</p>
          </div>
        )}
      </div>
    </div>
  );
}