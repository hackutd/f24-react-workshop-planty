import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import data from "../data.json";

function Popup({ isPopupOpen, closePopup, onFormSubmit }) {
  const [name, setName] = useState("");
  const [pictureIndex, setPictureIndex] = useState(0);

  const handleLeftClick = () => {
    if (pictureIndex === 0) setPictureIndex(data.pictures.length - 1);
    else setPictureIndex(pictureIndex - 1);
  };

  const handleRightClick = () => {
    if (pictureIndex === data.pictures.length - 1) setPictureIndex(0);
    else setPictureIndex(pictureIndex + 1);
  };

  // Create new plant button
  const handleSubmit = () => {
    const randomPrice = randomInt(10, 25); // Random price between 10 and 25
    const randomGrowth = randomInt(5, 15); // Random max growth between 5 and 15

    // Callback function call
    onFormSubmit({
      name,
      price: randomPrice,
      picture: pictureIndex,
      growth: 0,
      maxGrowth: randomGrowth,
    });

    // Reset state variables
    setName("");
    setPictureIndex(0);
  };

  // Don't show popup if it isn't open
  if (!isPopupOpen) return null;

  return (
    <div className="bg-black/50 fixed top-0 left-0 z-30 h-screen w-screen flex flex-col">
      <div className="p-4 md:p-8 m-auto bg-background rounded-3xl flex flex-col items-center">
        {/* Title */}
        <h1 className="my-4 text-textDark text-5xl font-jua">New Plant</h1>

        {/* Image select */}
        <div className="flex flex-row items-center justify-center flex-wrap">
          <IoMdArrowDropleft
            size={70}
            className="text-primary translate-x-2 cursor-pointer"
            onClick={handleLeftClick}
          />
          <img
            className="rounded-full h-36 w-36 object-cover mx-4"
            src={data.pictures[pictureIndex]}
            alt="Plant"
          />
          <IoMdArrowDropright
            size={70}
            className="text-primary -translate-x-2 cursor-pointer"
            onClick={handleRightClick}
          />
        </div>
        <h1 className="font-balsamiq text-primary text-2xl pt-4">
          Select Image
        </h1>

        {/* Name input */}
        <div className="flex flex-col w-full">
          <label className="text-primary text-lg font-balsamiq mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 min-w-60 h-10 bg-background focus:bg-backgroundDark outline-none border-2 border-primary focus:border-textLight rounded-lg text-text duration-100"
          ></input>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="mt-6 px-8 py-1 font-bold font-balsamiq text-2xl text-primary rounded-lg bg-backgroundDark focus:bg-backgroundDarker hover:bg-backgroundDarker outline-none duration-150"
        >
          plant!
        </button>

        {/* Close button */}
        <button
          onClick={closePopup}
          className="mt-2 px-6 py-1 text-textLight font-bold text-lg font-balsamiq rounded-lg outline-none focus:text-primary hover:text-primary duration-150"
        >
          cancel
        </button>
      </div>
    </div>
  );
}

// Generate random integer between min and max, inclusive
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Popup;
