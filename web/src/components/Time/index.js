import React from "react";

import "./styles.css";

const Time = ({ position, name, points, defeats, victories, imagePath }) => {
  return (
    <div
      className={`card ${
        position <= 4 ? "card--first" : position > 16 ? "card--last" : true
      }`}
    >
      <div className="image">
        <img src={imagePath} alt={name} />
      </div>
      <div className="info">
        <div>
          <h2>{name}</h2>
          <div className="points">
            <div className="point">
              <p>{points || "-"}</p>
              <p>Pontos</p>
            </div>
            <div className="point">
              <p>{victories || "-"}</p>
              <p>Vitorias</p>
            </div>
            <div className="point">
              <p>{defeats || "-"}</p>
              <p>Derrotas</p>
            </div>
          </div>
        </div>
        <div className="position">
          <h2>{`${position}°`}</h2>
        </div>
      </div>
    </div>
  );
};

export default Time;
