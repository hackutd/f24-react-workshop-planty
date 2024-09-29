import React from "react";

function Card({ name, picture, price, growth, maxGrowth, onClick }) {
  return (
    <div className="w-[24rem] mt-6 mx-2 p-2 bg-backgroundDark rounded-xl font-balsamiq flex justify-center gap-2">
      {/* Picture and Water/Button */}
      <div className="mx-2 flex flex-col justify-center">
        <div className="w-16 h-16 mx-auto">
          <img
            className="w-full h-full flex rounded-full object-cover "
            src={picture}
            alt="flower"
          />
        </div>
        <button
          onClick={onClick}
          className="w-20 mt-2 rounded-md bg-backgroundDarker text-primary font-bold text-lg transition hover:text-text"
        >
          water
        </button>
      </div>

      {/* Name and Sellprice */}
      <div className="mt-1 flex flex-col grow">
        <h1 className="text-3xl text-text font-bold">{name}</h1>
        <h1 className="mb-2 mt-[-0.25rem] text-textLight">
          sell price:
          <span className="ml-1 text-primary text-lg font-bold">{price}g</span>
        </h1>
        <h1 className="text-text text-5xl font-bold self-center">
          {growth}
          <span className="ml-1 text-textLight text-lg">
            /{maxGrowth} growth
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Card;

// Properties: name, picture, price, growth, maxGrowth
