import { ChangeEvent, useState } from 'react';
import '../FormCommon.css';
//import './FormNumber.css';

export interface FormNumberProps {
    id: string;
    initialValue?: string;
    label?: string;
    onChange?: (value: string) => any;
    placeholder?: string;
}

export const FormNumber = ({id, initialValue, label, onChange, placeholder}: FormNumberProps) => {
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
        type='number'
        value={value}
      />
    </label>
  );
}

