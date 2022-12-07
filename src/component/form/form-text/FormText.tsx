import { ChangeEvent, useState } from "react";

export interface FormTextProps {
  ref?: React.LegacyRef<HTMLInputElement>;
  id: string;
  initialValue?: string;
  labelText?: string;
  name: string;
  onChange: (value: string) => any;
  placeholder?: string;
}

export const FormText = ({
  ref,
  id,
  initialValue,
  labelText,
  name,
  onChange,
  placeholder,
}: FormTextProps) => {
  const [value, setValue] = useState(initialValue || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <label htmlFor={id}>
      {labelText}
      <input
        ref={ref}
        className="rclib-form-element"
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </label>
  );
};
