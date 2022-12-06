import { ChangeEvent, useState } from 'react';
import './FormTextArea.css';

export interface FormTextAreaProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => any;
  placeholder?: string;
}

export const FormTextArea = ({id, initialValue, label, onChange, placeholder}: FormTextAreaProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
    setValue(newValue);
  }

  return (
    <label className='rclib-form-label' htmlFor={id}>
      { label }
      <textarea
        className='rclib-form-input rclib-form-text-area'
        id={id}
        name={id}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

