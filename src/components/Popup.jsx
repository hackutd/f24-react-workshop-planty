import React, { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function Popup({
  isOpen,
  togglePopup,
  handleFormChange,
  handleFormSubmit,
  formData,
  pictures,
}) {
  const pictureKeys = Object.keys(pictures);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  if (!isOpen) return null;

  const handleLeftClick = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? pictureKeys.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === pictureKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSubmit = () => {
    const randomPrice = Math.floor(Math.random() * 11) + 15; // Random price between 15 and 25
    const randomGrowth = Math.floor(Math.random() * 5) + 4; // Random max growth between 4 and 8
    handleFormSubmit({
      ...formData,
      price: randomPrice,
      picture: pictureKeys[currentPictureIndex],
      growth: 1,
      maxGrowth: randomGrowth,
    });
  };

  return (
    <div className="bg-black/50 fixed top-0 left-0 z-30 h-screen w-screen flex flex-col">
      <div className="bg-background flex m-auto rounded-3xl flex-col items-center p-4 md:p-10">
        <h1 className="text-textDark text-5xl font-jua mb-4">New Plant</h1>
        <div className="flex flex-row items-center justify-center flex-wrap">
          <IoMdArrowDropleft
            size={70}
            className="text-primary translate-x-2 cursor-pointer"
            onClick={handleLeftClick}
          />
          <img
            className="rounded-full h-36 w-36 object-cover mx-4"
            src={pictures[pictureKeys[currentPictureIndex]]}
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
        <div className="flex flex-col w-full md:w-2/3">
          <label className="text-primary text-lg font-balsamiq mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            className="p-3 w-full h-10 bg-backgroundDark border border-text rounded-lg text-text"
          ></input>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-backgroundDark text-primary m-6 h-8 w-28 font-bold text-lg font-balsamiq rounded-lg"
        >
          Add Plant
        </button>
        <button
          onClick={togglePopup}
          className="bg-backgroundDark text-primary m-6 h-8 w-28 font-bold text-lg font-balsamiq rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Popup;
