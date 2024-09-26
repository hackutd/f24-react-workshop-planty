import React from "react";
import Popup from "./Popup.jsx";

function Menu() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <NumberDisplay name="gold" value="500" />
      <NumberDisplay name="water" value="25" />
      <MenuButton purchase="buy 10 water" cost="10" />
      <MenuButton purchase="new plant" cost="5" />
      {/* <Popup isOpen={true}></Popup> */}
    </div>
  );
}

function NumberDisplay({ name, value }) {
  return (
    <div className="w-44 flex flex-row justify-evenly items-center bg-backgroundDark border-backgroundDark border-[3px] rounded-xl font-bold text-xl font-balsamiq">
      <h1 className="px-2 basis-5/12 text-primary text-center bg-backgroundDark">
        {name}
      </h1>
      <div className="h-full grow flex justify-center bg-background rounded-r-xl">
        <h1 className="text-text">{value}</h1>
      </div>
    </div>
  );
}

function MenuButton({ purchase, cost }) {
  return (
    <div className="px-4 rounded-xl bg-backgroundDark transition hover:bg-backgroundDarker flex items-center">
      <button className="text-xl text-primary font-bold font-balsamiq">
        {purchase} ({cost}g)
      </button>
    </div>
  );
}

export default Menu;
