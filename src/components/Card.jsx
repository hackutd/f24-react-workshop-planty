import React from "react";

function Card() {
  return (
    <>
      <div className="flex flex-wrap m-auto justify-center font-balsamiq mt-6 mx-64">
        <div className="flex flex-wrap gap-6 justify-center max-w-[1400px]">
          {/* Each card div here. */}
          <div className="bg-backgroundDark rounded-xl p-2 flex justify-center gap-2">
            {/* Picture and Water/Button */}
            <div>
              <div className="w-16 h-16 mx-auto">
                <img
                  className="object-cover w-full h-full flex rounded-full"
                  src="https://www.calyxflowers.com/uploads/tulipacf.jpg"
                  alt=""
                />
              </div>
              <button className="hover:text-text transition duration-150 w-24 mt-2 bg-backgroundDarker text-primary font-bold text-lg rounded-md">
                water
              </button>
            </div>
            {/* Container for 2 divs, Name/Sellprice and Growth metric */}
            <div className="flex flex-col"></div>
            {/* Name and Sellprice */}
            <div className="flex flex-col mt-1 mr-24">
              <h1 className="text-3xl text-text font-bold ">Plant Name</h1>
              <h1 className="text-textLight">
                Sell Price: <span className="text-primary text-lg">15g</span>
              </h1>
              <h1 className="m-auto text-text font-bold text-5xl">
                3<span className="text-textLight text-lg">/6 growth</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

// name, picture, value, growth, maxgrowth,
