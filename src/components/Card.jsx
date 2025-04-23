import React from "react";
import "./card.css";
const Card = () => {
  return (
    <div className="card_design">
      <div className="img-dev">
        <img src="./assets/cardImg.jpg" alt="cardimg" />
      </div>

      <div className="content-data">
        <div className="content-dev">
          <span className="content-cetg">Interior</span>
          <h3 className="cont-heading">Top 5 Living Room Inspirations</h3>
        </div>
        <div className="content-desc">
          <p>
            Curated vibrant colors for your living, make it pop & calm in the
            same time.
          </p>
        </div>
        <a className="btn" href="#">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
