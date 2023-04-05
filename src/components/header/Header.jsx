import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./header.css";

import { AiFillCar } from "react-icons/ai";
import { FaBed, FaCalendarDay, FaPlaneDeparture, FaTaxi } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMod" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaPlaneDeparture />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <AiFillCar />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant saving of 10% or
              more with a free MyBooking account.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FaCalendarDay className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "dd-MM-yyy")} To ${format(
                  date[0].endDate,
                  "dd-MM-yyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <GiPerson className="headerIcon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >{`${option.adult} adult . ${option.children} children . ${option.room} room `}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.adult <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.adult}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.children <= 0}
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.children}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={option.room <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.room}
                        </span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
