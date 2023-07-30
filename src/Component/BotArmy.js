import React from "react";

const BotArmy = ({ card, onCardClose }) => {
  const handleclose = (bot) => {
    onCardClose(bot);
  };
  return (
    <div style={{ backgroundColor: "greenyellow", height: "600px" }}>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {card.length === 0 ? (
          <p>Your bot army is empty.</p>
        ) : (
          card.map((bot) => (
            <div key={bot.id} style={{ marginLeft: "30px", flexBasis:'10%' }}>
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="card-img-top"
                style={{
                  backgroundColor: "grey",
                  width: "350px",
                  height: "350px",
                }}
              />
              <div className="card-body">
                <h2 className="card-name" style={{ marginLeft: "70px" }}>
                  {bot.name}
                </h2>
                <p>{bot.catchphrase}</p>
                <div style={{ marginLeft: "50px" }}>
                  <i
                    className="fas fa-heartbeat"
                    style={{ fontSize: "12px", marginRight: "5px" }}
                  ></i>
                  <span style={{ fontSize: "15px" }}>{bot.health}</span>
                  <i
                    className="fas fa-bolt"
                    style={{ fontSize: "12px", marginLeft: "15px" }}
                  ></i>
                  <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                    {bot.damage}
                  </span>
                  <i
                    className="fas fa-shield-alt"
                    style={{ fontSize: "12px", marginLeft: "15px" }}
                  ></i>
                  <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                    {bot.armor}
                  </span>
                </div>
                <button
                  type="button"
                  style={{ marginLeft: "100px", marginTop: "20px" }}
                  className="btn btn-danger"
                  onClick={() => handleclose(bot)}
                >
                  Close
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BotArmy;
