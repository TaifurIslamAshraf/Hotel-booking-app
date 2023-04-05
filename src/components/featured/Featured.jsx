import React from "react";

import "./featured.css";

import hotel1 from "../../images/pexels-donald-tong-189296.jpg";
import hotel2 from "../../images/pexels-pixabay-237272.jpg";
import hotel3 from "../../images/pexels-pixabay-261204.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src={hotel1} alt="hotel1" />
        <div className="featuredTitles">
          <h1>Dublin Hotels</h1>
          <h2>1264 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src={hotel2} alt="hotel1" />
        <div className="featuredTitles">
          <h1>Dublin Hotels</h1>
          <h2>1264 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src={hotel3} alt="hotel1" />
        <div className="featuredTitles">
          <h1>Dublin Hotels</h1>
          <h2>1264 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
