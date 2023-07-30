import React from "react";

const BotCard = ({ image, name, phrase, health, damage, armor,onClick }) => {
//  function that handles the click
 const handleBotClick = () =>{
  onClick();
 }
   
  return (
    // display the details in a card
    <div
      className="card mb-3"
      style={{ maxWidth: "18rem", marginLeft: "120px" }}
      onClick={handleBotClick}
    >
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ backgroundColor: "grey" }}
      />

      {/*create a card body */}
      <div className="card-body">
        <h2 className="card-name" style={{ marginLeft: "70px" }}>
          {name}
        </h2>
        <p className="card-text">{phrase}</p>
        <hr></hr>

        {/* create a div for icons */}
        <div style={{ marginLeft: "50px" }}>
          <i
            className="fas fa-heartbeat"
            style={{ fontSize: "12px", marginRight: "5px" }}
          ></i>
          <span style={{ fontSize: "15px" }}>{health}</span>
          <i
            className="fas fa-bolt"
            style={{ fontSize: "12px", marginLeft: "15px" }}
          ></i>
          <span style={{ fontSize: "15px", marginLeft: "5px" }}>{damage}</span>
          <i
            className="fas fa-shield-alt"
            style={{ fontSize: "12px", marginLeft: "15px" }}
          ></i>
          <span style={{ fontSize: "15px", marginLeft: "5px" }}>{armor}</span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
