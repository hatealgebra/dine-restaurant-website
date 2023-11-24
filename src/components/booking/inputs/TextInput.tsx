import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";
import type { FieldValues } from "react-hook-form";

const TextInput = forwardRef<HTMLInputElement, FieldValues>(
  ({ onChange, onBlur, value, placeholder, errorMessage }, inputRef) => {
    return (
      <div>
        <label className="hidden" htmlFor=""></label>
        <input
          ref={inputRef}
          className={`formElement w-full`}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <span className="text-error text-[1rem] leading-[1rem] inline-block mt-4">
          {errorMessage}
        </span>
      </div>
    );
  },
);

export default TextInput;
