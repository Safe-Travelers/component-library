import { ChangeEvent, useState } from "react";

export interface FormTextAreaProps {
  id: string;
  initialValue?: string;
  labelText?: string;
  name: string;
  onChange: (value: string) => any;
  placeholder?: string;
}

export const FormTextArea = ({id, initialValue, labelText, name, onChange, placeholder}: FormTextAreaProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <label htmlFor={id}>
      { labelText }
      <textarea
        className='rclib-form-element'
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

