import React, { useState } from "react";
import PersonCard from "../components/Card/PersonCard";
import { people } from "../data/people_data";
import style from "../components/Card/Card.module.css";

const Card = () => {
  const [peopleData, setPeopleData] = useState(people);

  const dropPerson = (id) => {
    setPeopleData(peopleData.filter((item) => item.id !== +id));
  };

  return (
    <>
      <div className={style.row}>
        {peopleData.length === 0 ? (
          <>
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </>
        ) : (
          peopleData.map((person) => (
            <div key={person.id} className={style.column}>
              <PersonCard person={person} dropPerson={dropPerson} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Card;