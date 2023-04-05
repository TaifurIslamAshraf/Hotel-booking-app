import React from "react";

import "./propertyList.css";

import Hotel1 from "../../images/pexels-donald-tong-189296.jpg";
import Hotel2 from "../../images/pexels-pixabay-237272.jpg";
import Hotel3 from "../../images/pexels-pixabay-261204.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={Hotel1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>422 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel2} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>422 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel3} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>422 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>422 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel2} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>422 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel3} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>422 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
