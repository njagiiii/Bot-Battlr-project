import React, { useEffect, useState } from "react";
import BotMap from "./BotMap";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import BotArmy from "./BotArmy";

const BotCollection = () => {
  const [data, setData] = useState([]); //create the state of the current data
  const [selectedCard, setselectedCard] = useState(null); // create state of the selected card

  const handleClick = (card) => {
    setselectedCard(card); //  function that handles the display of the selectedcard
  };

  const handleClose = () => {
    setselectedCard(null); //  function to close the selected card
  };

  const [enlistbot, setEnlistedbot] = useState([]); // state to manage the  enlisted bot

   const handleenlistbutton = (card) => {
    const BotEnlisted = enlistbot.every((enlist) => enlist.card_class === card.card_class);
    if(BotEnlisted){
      setEnlistedbot((previousenlistbot) => [...previousenlistbot, card])
    }
     
   };
   const buttoncloseenlist = (bots) => {
    setEnlistedbot((previousenlistbot) => previousenlistbot.filter((bot)=> bot.id !== bots.id));
   }

  //Fetch data
  const fetchData = () => {
    fetch("https://bot-x0k6.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log("Error fetching", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <BotArmy onCardClose={buttoncloseenlist} card={enlistbot}/>
      <SortBar data={data} setData={setData} />
      {/* if card is selected render on the BotSpecs */}
      {selectedCard ? (
        <BotSpecs card={selectedCard} onClose={handleClose} onClick={handleenlistbutton} />
      ) : (
        <BotMap data={data} onCardClick={handleClick} />
      )}
     
    </div>
  );
};

export default BotCollection;
