import { ChangeEvent, ReactNode, useState } from 'react';
import '../FormCommon.css';
import './FormSelect.css';

export interface FormSelectProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => any;
  options?: string[];
  placeholder?: string;
}

export const FormSelect = ({id, initialValue, label, onChange, options, placeholder}: FormSelectProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    if (onChange && newValue !== placeholder) onChange(newValue);
    setValue(newValue);
  }

  const renderOptions = (placeholder: string | undefined, options: string[] | undefined): ReactNode[] | null => {
    const optionElements: ReactNode[] = [];

    if (placeholder) {
      optionElements.push(
        <option key={placeholder} value={placeholder}>{placeholder}</option>
      );
    }

    options?.forEach(option => {
      optionElements.push(
        <option key={option} value={option}>{option}</option>
      );
    });

    return optionElements.length > 0 ? optionElements : null;
  }

  return (
    <label className='rclib-form-label' htmlFor={id}>
      { label }
      <select
        className='rclib-form-input rclib-form-select'
        id={id}
        name={id}
        onChange={handleChange}
        value={value}
      >
        { renderOptions(placeholder, options) }
      </select>
    </label>
  );
}
