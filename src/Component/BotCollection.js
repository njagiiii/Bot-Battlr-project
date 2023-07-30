import React, { useEffect, useState } from "react";
import BotMap from "./BotMap";
import BotSpecs from "./BotSpecs";

const BotCollection = () => {
  //create the state of the current data
  const [data, setData] = useState([]);

  // create state of the selected card
     const [selectedCard , setselectedCard] = useState(null)

    //  function that handles the display of the selectedcard
     const handleClick = (card) => {
      setselectedCard(card)
     }

    //  function to close the selected card
     const handleClose = () => {
      setselectedCard(null)
     }
 
  //Fetch data
  const fetchData = () => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error fetching", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* if card is selected render on the BotSpecs */}
      {selectedCard ? (
        <BotSpecs card={selectedCard}  onClose={handleClose}/>
      ) : (
        <BotMap data={data} onCardClick={handleClick}/>
      )}     
    </div>
  );
};

export default BotCollection;
