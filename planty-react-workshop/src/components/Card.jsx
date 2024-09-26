import React from "react";

function Card() {
  return (
    <>
      <div className="flex justify-center flex-wrap font-balsamiq mt-6 mx-64">
        <div className="flex flex-row w-fit gap-6">
          {/* Each card div here. */}
          <div className="bg-backgroundDark w-full rounded-lg p-2 flex justify-center gap-2">
            {/* Picture and Water/Button */}
            <div>
              <div className="w-16 h-16 mx-auto">
                <img
                  className="object-cover w-full h-full flex rounded-full"
                  src="https://www.calyxflowers.com/uploads/tulipacf.jpg"
                  alt=""
                />
              </div>
              <button className="w-24 mt-2 bg-backgroundDarker text-primary font-bold text-lg rounded-md">water</button>
            </div>
            {/* Container for 2 divs, Name/Sellprice and Growth metric */}
            <div className="flex flex-col"></div>
            {/* Name and Sellprice */}
            <div className="flex flex-col mt-1">
              <h1 className="text-3xl text-text font-bold ">Plant Name</h1>
              <h1 className="text-textLight">Sell Price: <span className="text-primary text-lg">15g</span></h1>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

// name, picture, value, growth, maxgrowth,
