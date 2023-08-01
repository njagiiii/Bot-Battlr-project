import React from "react";

const BotSpecs = ({ card, onClose, onClick }) => {
  const handleEnlistClick = () => {
    onClick(card);
  }
  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px",marginTop:"80px", marginLeft:"800px"}}
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
          <div className="card-body">
            <h2 className="card-name" style={{ marginLeft: "10px" }}>
              {card.name}
            </h2>
            <p className="card-text">{card.catchphrase}</p>
            

            {/* create a div for icons */}
            <div style={{ marginLeft: "10px" }}>
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
              </span><br></br>

              <span style={{marginInline:"20px", width:"100px"}}><button type="button" class="btn btn-primary" onClick={handleEnlistClick} style={{marginTop:"20px", backgroundColor: "lime", fontSize: "20px", padding: "6px"}}>Enlist</button></span>
              <span><button type="button" class="btn btn-primary" onClick={onClose} style={{marginTop:"20px", backgroundColor: "red", fontSize: "20px", padding: "6px"}}>Go Back</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
