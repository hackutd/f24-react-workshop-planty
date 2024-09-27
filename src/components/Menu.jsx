import React, { useState } from "react";
import Popup from "./Popup.jsx";
import Card from "./Card.jsx";
import pictures from "../data/pictures.js"; // Import the pictures module

function Menu() {
  const initialFlowers = [
    {
      name: "Eugene",
      price: 12,
      picture: "one",
      growth: 1,
      maxGrowth: 6,
    },
    {
      name: "Eugene's son",
      price: 12,
      picture: "three",
      growth: 1,
      maxGrowth: 6,
    },
    {
      name: "Eugene's brother",
      price: 12,
      picture: "four",
      growth: 1,
      maxGrowth: 6,
    },
  ];

  const [gold, setGold] = useState(25);
  const [water, setWater] = useState(15);
  const [flowers, setFlowers] = useState(initialFlowers);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newPlantData, setNewPlantData] = useState({
    name: "",
    price: 0,
    picture: "",
    growth: 1,
    maxGrowth: 6,
  });

  const buyWater = () => {
    if (gold >= 10) {
      setGold(gold - 10);
      setWater(water + 10);
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPlantData({ ...newPlantData, [name]: value });
  };

  const handleFormSubmit = (newPlant) => {
    console.log("Received new plant data:", newPlant); // Add this line
    if (gold >= 5) {
      setGold(gold - 5);
      setFlowers([...flowers, newPlant]);
      closePopup();
    }
  };

  const sellPlant = (index) => {
    const plant = flowers[index];
    setGold(gold + plant.price);
    setFlowers(flowers.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <NumberDisplay name="gold" value={gold} />
        <NumberDisplay name="water" value={water} />
        <MenuButton purchase="buy 10 water" cost="10" onClick={buyWater} />
        <MenuButton purchase="new plant" cost="5" onClick={openPopup} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {flowers.map((flower, index) => (
          <Card
            key={index}
            name={flower.name}
            picture={pictures[flower.picture]}
            price={flower.price}
            growth={flower.growth}
            maxGrowth={flower.maxGrowth}
            onSell={() => sellPlant(index)}
          />
        ))}
      </div>
      {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          togglePopup={closePopup}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
          formData={newPlantData}
          pictures={pictures}
        />
      )}
    </>
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

function MenuButton({ purchase, cost, onClick }) {
  return (
    <div className="px-4 rounded-xl bg-backgroundDark transition hover:bg-backgroundDarker flex items-center">
      <button
        onClick={onClick}
        className="text-xl text-primary font-bold font-balsamiq"
      >
        {purchase} ({cost}g)
      </button>
    </div>
  );
}
export default Menu;
