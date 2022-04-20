import React from "react";
import useStore from "../../store/store";

const Card = ({
  id,
  title,
  storageCapacity,
  dataSendCapacity,
  usersAllowed,
  monthlyAmt,
  annualAmt,
}) => {
  const globalState = useStore(false)[0];
  const listClassName = `card-container__list__item ${
    id !== "0" && id !== "2" ? "special" : ""
  }`;

  const amt = globalState.isItMonthly ? monthlyAmt : annualAmt;

  return (
    <li className={listClassName}>
      <h3 className="card-container__list__item__title">{title}</h3>
      <div className="card-container__list__item__price__wrapper">
        <p className="card-container__list__item__dollar-sign">$</p>
        <p className="card-container__list__item__price">{`${amt}`}</p>
      </div>

      <p className="card-container__list__item__storage">{storageCapacity}</p>
      <p className="card-container__list__item__users-allowed">
        {usersAllowed}
      </p>
      <p className="card-container__list__item__data">{dataSendCapacity}</p>
      <a href="#" className="card-container__list__item__learn-more">
        Learn More
      </a>
    </li>
  );
};

export default Card;
