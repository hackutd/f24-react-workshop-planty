import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Menu from "./components/Menu.jsx";
import Card from "./components/Card.jsx";
import Popup from "./components/Popup.jsx";
import data from "./data.json";

function App() {
  const [gold, setGold] = useState(10);
  const [water, setWater] = useState(10);
  const [flowers, setFlowers] = useState(data.initialFlowers);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Buy water function
  const buyWater = () => {
    if (gold >= 10) {
      setGold(gold - 10);
      setWater(water + 10);
    } else {
      alert("You do not have enough gold to buy water!");
    }
  };

  // Add new plant function
  const handleFormSubmit = (newPlant) => {
    if (gold >= 5) {
      setGold(gold - 5);
      setFlowers([...flowers, newPlant]);
      setIsPopupOpen(false);
    } else {
      alert("You do not have enough gold to buy a plant!");
    }
  };

  // Waters a specific plant
  const waterPlant = (index) => {
    if (water > 0) {
      setWater(water - 1);
      setFlowers(
        flowers.map((p, i) => {
          if (i !== index) return p;
          else return { ...p, growth: p.growth + 1 };
        })
      );
    } else {
      alert("You have no more water left!");
    }
  };

  // Sells a specific plant
  const sellPlant = (index) => {
    const plant = flowers[index];
    setGold(gold + plant.price);
    setFlowers(flowers.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <Menu
        gold={gold}
        water={water}
        openPopup={() => setIsPopupOpen(true)}
        buyWater={buyWater}
      />

      {/* Card grid */}
      <div className="flex flex-wrap justify-center gap-4">
        {flowers.map((flower, index) => (
          <Card
            key={index}
            name={flower.name}
            picture={data.pictures[flower.picture]}
            price={flower.price}
            growth={flower.growth}
            maxGrowth={flower.maxGrowth}
            onWater={() => waterPlant(index)}
            onSell={() => sellPlant(index)}
          />
        ))}
      </div>

      <Popup
        isPopupOpen={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
