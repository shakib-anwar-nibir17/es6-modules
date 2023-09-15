import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [bottleToCart, setBottleToCart] = useState([]);
  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...bottleToCart, bottle];
    setBottleToCart(newCart);
  };
  return (
    <div>
      <h3>Bottles Here:{bottles.length}</h3>
      <h3>Items Added: {bottleToCart.length}</h3>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
