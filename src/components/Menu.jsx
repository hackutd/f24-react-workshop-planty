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

function NumberDisplay(props) {
  return (
    <div className="flex flex-wrap gap-8 justify-center font-balsamiq">
      <div className="flex flex-row justify-evenly items-center bg-backgroundDark text-primary rounded-xl border-backgroundDark border-2">
        <h1 className="px-2 flex text-xl font-bold justify-center bg-backgroundDark translate-x-2">
          {props.name}
        </h1>
        <div className="w-24 h-full bg-background rounded-xl flex justify-center">
          <h1 className="font-bold text-xl text-text">{props.value}</h1>
        </div>
      </div>
    </div>
  );
}

function MenuButton(props) {
  return (
    <div className="px-4 font-balsamiq bg-backgroundDark text-primary rounded-xl border-backgroundDark border-2 hover:bg-backgroundDarker hover:border-backgroundDarker transition duration-150">
      <button className="w-full flex text-xl font-bold justify-center">
        {props.purchase} ({props.cost}g)
      </button>
    </div>
  );
}

export default Menu;
