import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faTrain,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { Children, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = ({type}) => {
   
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setopenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="Header">
      <div
       className={
          type === "List" ? "headerContainer ListMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem  active ">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faCar} />
            <span> travel</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faPlane} />
            <span>private plane</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faTrain} />
            <span> train Stations</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faWalking} />
            <span>sightseeing</span>
          </div>
        </div>
        {type !== "List" && (
          <>
            <h1 className="headerTitle">
              Discount for lifetime ! great deal Hurry up !!!!
            </h1>
            <p className="header-discription">
              get instant Discount & manymore - wishlist your travel destination
              and win Rewards ! mail us @bookingmystry.com before before newyear
              for more prizes
            </p>
            <button className="headerbtn">sign in / Register</button>
            <div className="headerSearch">
              <div className="headersearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headersearchinput"
                />
              </div>
              <div className="headersearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}{" "}
                </span>
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
              <div className="headersearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setopenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room} room `}
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </span>
              </div>
              <div className="headersearchItem">
                <button className="headerbtn">search here</button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
