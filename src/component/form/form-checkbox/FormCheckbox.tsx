import { useState } from 'react';
import '../FormCommon.css';
import './FormCheckbox.css';

export interface FormCheckboxProps {
  id: string;
  initialChecked?: boolean;
  label: string;
  onCheck?: (checked: boolean) => any;
}

export const FormCheckbox = ({id, initialChecked, label, onCheck}: FormCheckboxProps) => {
  const [checked, setChecked] = useState(initialChecked ? true : false);

  const handleChange = () => {
    if (onCheck) onCheck(!checked);
    setChecked(!checked);
  }

  return (
    <label className='rclib-form-checkbox-label' htmlFor={id}>
      <input
        checked={checked}
        className='rclib-form-checkbox'
        id={id}
        name={id}
        onChange={handleChange}
        type='checkbox'
      />
      { label }
    </label>
  );
}
