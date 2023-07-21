import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log("option display", currentPotentials);
  return (
    <div className="stack">
      {currentPotentials.map((e, i) => {
        return (
          <h2 key={i} className="country-option">
            {e.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
