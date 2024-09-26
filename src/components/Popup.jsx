import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function Popup({ isOpen, togglePopup }) {
  if (!isOpen) return null;

  return (
    <div className="bg-black/50 fixed top-0 left-0 z-30 h-screen w-screen flex flex-col">
      <div className="bg-background flex w-1/3 m-auto rounded-3xl flex-col items-center p-4  md:p-10">
        <h1 className="text-textDark text-5xl font-jua mb-4">New Plant</h1>
        <div className="flex flex-row items-center justify-center">
          <IoMdArrowDropleft size={70} className="text-primary translate-x-2" />
          <img
            className="rounded-full h-36 w-36 object-cover mx-2"
            src="https://c8.alamy.com/comp/S22E9F/a-random-daisy-basking-in-the-spring-sun-S22E9F.jpg"
            alt=""
          />
          <IoMdArrowDropright
            size={70}
            className="text-primary -translate-x-2"
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
            className="p-3 w-full h-10 bg-backgroundDark border border-text rounded-lg text-text"
          ></input>
        </div>
        <button
          onClick={togglePopup}
          className="bg-backgroundDark text-primary m-6 h-8 w-28 font-bold text-lg font-balsamiq rounded-lg"
        >
          plant!
        </button>
      </div>
    </div>
  );
}

export default Popup;
