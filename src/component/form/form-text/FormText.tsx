import { ChangeEvent, useState } from "react";

export interface FormTextProps {
  ref?: React.LegacyRef<HTMLInputElement>;
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => any;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
}

export const FormText = ({
  ref,
  id,
  initialValue,
  label,
  onChange,
  placeholder,
  pattern,
  required,
}: FormTextProps) => {
  const [value, setValue] = useState(initialValue || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    setValue(newValue);
  };

  if (required) {
    return (
      <label className="rclib-form-label" htmlFor={id}>
        {label}
        <input
          className="rclib-form-input"
          id={id}
          name={id}
          onChange={handleChange}
          placeholder={placeholder}
          type="text"
          value={value}
          pattern={pattern}
          required={required}
        />
      </label>
    );
  }

  return (
    <label className="rclib-form-label" htmlFor={id}>
      {label}
      <input
        ref={ref}
        className="rclib-form-input"
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
        pattern={pattern}
      />
    </label>
  );
};
