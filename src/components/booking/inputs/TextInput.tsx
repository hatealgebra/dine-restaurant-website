import { forwardRef } from "react";
import type { FieldValues } from "react-hook-form";

const TextInput = forwardRef<HTMLInputElement, FieldValues>(
  ({ onChange, onBlur, value, placeholder }, inputRef) => {
    return (
      <div>
        <label className="hidden" htmlFor=""></label>
        <input
          ref={inputRef}
          className="formElement w-full"
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    );
  },
);

export default TextInput;
