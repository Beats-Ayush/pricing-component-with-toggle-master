import React from "react";
import useStore from "../../store/store";
import Card from "./Card";

const CardContainer = (props) => {
  const globalState = useStore()[0];
  return (
    <ul className="card-container__list">
      {globalState.packages.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          title={p.title}
          storageCapacity={p.storageCapacity}
          usersAllowed={p.usersAllowed}
          dataSendCapacity={p.dataSendCapacity}
          monthlyAmt={p.monthlyAmt}
          annualAmt={p.annualAmt}
        />
      ))}
    </ul>
  );
};

export default CardContainer;
