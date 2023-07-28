import React, { useEffect, useState } from "react";
import BotMap from "./BotMap";

const BotCollection = () => {
    
  //create the state of the current data
  const [data, setData] = useState([]);

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
      <BotMap data={data} />
    </div>
  );
};

export default BotCollection;
