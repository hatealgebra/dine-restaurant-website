import React from "react";
import type { FieldValues } from "react-hook-form";

import minusIcon from "@images/icons/icon-minus.svg";
import plusIcon from "@images/icons/icon-plus.svg";

const Counter = ({ onChange, onBlur, value }: FieldValues) => {
  const handleMinus = () => {
    if (value === 1) return;
    onChange((prev: number) => prev - 1);
  };
  const handlePlus = () => {
    onChange((prev: number) => prev + 1);
  };

  return (
    <div className="formElement flex justify-between px-12">
      <button type="button" onClick={handleMinus}>
        <img src={minusIcon.src} alt="Minus icon" />
      </button>
      <div className="flex font-bold">
        <span>{value} people</span>
      </div>
      <button type="button" onClick={handlePlus}>
        <img src={plusIcon.src} alt="Plus icon" />
      </button>
    </div>
  );
};

export default Counter;
