import React  from "react";
import BotCard from "./BotCard";


const BotMap = ({ data, onCardClick}) => {
  return (
    //  map through the data we have fetched
    <div style={{ marginTop: "20px" }}>
      {data.map((item) => (
        <BotCard
         onClick={() => onCardClick(item)}
          key={item.id}
          image={item.avatar_url}
          name={item.name}
          phrase={item.catchphrase}
          health={item.health}
          damage={item.damage}
          armor={item.armor}
        />
      ))}
      
      
    </div>
  );
};

export default BotMap;
