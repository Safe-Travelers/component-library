import { ChangeEvent, useState } from 'react';
import '../FormCommon.css';
import './FormDate.css';

export interface FormDateProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: Date) => any;
}

export const FormDate = ({id, initialValue, label, onChange}: FormDateProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(new Date(newValue));
    setValue(newValue);
  }
  
  return (
    <label className='rclib-form-label' htmlFor={id}>
      { label }
      <input
        className='rclib-form-input rclib-form-date'
        id={id}
        name={id}
        onChange={handleChange}
        type='datetime-local'
        value={value}
      />
    </label>
  );
}

