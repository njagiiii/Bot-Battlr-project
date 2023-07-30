import React from "react";

const BotSpecs = ({ card, onClose }) => {
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px",marginTop:"500px", marginLeft:"1000px"}}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={card.avatar_url}
            alt={card.name}
            className="img-fluid rounded-start"
            style={{ backgroundColor: "grey", maxWidth:"250px"}}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{marginLeft:"100px"}}>
            <h2 className="card-name" style={{ marginLeft: "70px" }}>
              {card.name}
            </h2>
            <p className="card-text">{card.catchphrase}</p>
            

            {/* create a div for icons */}
            <div style={{ marginLeft: "50px" }}>
              <i
                className="fas fa-heartbeat"
                style={{ fontSize: "12px", marginRight: "5px" }}
              ></i>
              <span style={{ fontSize: "15px" }}>{card.health}</span>
              <i
                className="fas fa-bolt"
                style={{ fontSize: "12px", marginLeft: "15px" }}
              ></i>
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                {card.damage}
              </span>
              <i
                className="fas fa-shield-alt"
                style={{ fontSize: "12px", marginLeft: "15px" }}
              ></i>
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                {card.armor}
              </span>
              <span><button type="button" class="btn btn-primary" onClick={onClose} style={{marginTop:"20px"}}>Go Back</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
