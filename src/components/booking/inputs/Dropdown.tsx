import { useState } from "react";
import { type FieldValues } from "react-hook-form";

import arrow from "@images/icons/icon-arrow.svg";
import check from "@images/icons/icon-check.svg";

// TODO: Add deduce type property from another property

interface DropdownProps<T> extends FieldValues {
  options: T[];
}

const Dropdown = <T,>({ onChange, value, options }: DropdownProps<T>) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive((prevState) => !prevState);
  };

  const setNewValue = (newValue: T) => {
    onChange(newValue);
    setIsActive(false);
  };

  return (
    <div className="text-[2rem] formElement relative min-w-[8.8rem] tablet:min-w-[9.7rem]">
      <label htmlFor=""></label>
      <button
        type="button"
        className="flex items-center gap-5 justify-between w-full"
        onClick={toggleDropdown}
      >
        <span>{value}</span>
        <img
          className={`transition-transform stroke-gold  stroke-2 ${
            isActive && "rotate-180"
          }`}
          src={arrow.src}
          alt="Dropdown arrow"
        />
      </button>
      <ul className="absolute -bottom-2 left-0 w-full">
        <div
          className={`absolute top-0 z-10 bg-white w-full h-0 overflow-hidden transition-all flex flex-col ${
            isActive && "h-fit shadow-smallerDrop"
          }`}
        >
          {options.map((option, index) => (
            <li key={`${option}-${index}`}>
              <button
                onClick={() => setNewValue(option)}
                className="w-full inline-flex items-center gap-6 py-[1rem] ps-[1.2rem] pr-[1.3rem] tablet:ps-[1.6rem] tablet:pr-[3rem] hover:bg-slate-100"
              >
                <img
                  className={`stroke-gold ${value !== option && "invisible"}`}
                  src={check.src}
                  alt="Check icon"
                />
                <span>{option}</span>
              </button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Dropdown;
