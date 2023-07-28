import React from "react";
import BotCard from "./BotCard";

const BotMap = ({ data }) => {
  return (
    //  map through the data we have fetched
    <div>
      {data.map((item) => (
        <BotCard
          key={item.id}
          image={item.avatar_url}
          name={item.name}
          phrase={item.catchphrase}
          health ={item.health}
          damage={item.damage}
          armor={item.armor}
        />
      ))}
    </div>
  );
};

export default BotMap;
