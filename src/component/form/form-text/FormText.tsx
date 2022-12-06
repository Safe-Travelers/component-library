import { ChangeEvent, useState } from "react";

export interface FormTextProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => any;
  placeholder?: string;
}

export const FormText = ({id, initialValue, label, onChange, placeholder}: FormTextProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    setValue(newValue);
  }

  return (
    <label className='rclib-form-label' htmlFor={id}>
      { label }
      <input
        className='rclib-form-input'
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder}
        type='text'
        value={value}
      />
    </label>
  );
}

