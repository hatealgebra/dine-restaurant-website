import { forwardRef } from "react";
import type { FieldValues } from "react-hook-form";

const TextInput = forwardRef<HTMLInputElement, FieldValues>(
  (
    {
      onChange,
      onBlur,
      value,
      placeholder,
      errorMessage = false,
      showMessage = false,
    },
    inputRef,
  ) => {
    return (
      <div className="relative">
        <label className="hidden" htmlFor=""></label>
        <input
          ref={inputRef}
          className={`formElement w-full ${
            errorMessage && "text-error border-error placeholder:text-error"
          }`}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <span className="absolute left-0 -bottom-8 text-error text-[1rem] leading-[1rem] inline-block">
          {showMessage && errorMessage}
        </span>
      </div>
    );
  },
);

export default TextInput;
