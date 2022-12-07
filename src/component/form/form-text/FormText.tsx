import { ChangeEvent, forwardRef, useState } from "react";

export interface FormTextProps {
  id: string;
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => any;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
}

export const FormText = forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<FormTextProps>
>((props: FormTextProps, ref) => {
  const [value, setValue] = useState(props.initialValue || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (props.onChange) props.onChange(newValue);
    setValue(newValue);
  };

  if (props.required) {
    return (
      <label className="rclib-form-label" htmlFor={props.id}>
        {props.label}
        <input
          className="rclib-form-input"
          id={props.id}
          name={props.id}
          onChange={handleChange}
          placeholder={props.placeholder}
          type="text"
          value={value}
          pattern={props.pattern}
          required={props.required}
        />
      </label>
    );
  }

  return (
    <label className="rclib-form-label" htmlFor={props.id}>
      {props.label}
      <input
        ref={ref}
        className="rclib-form-input"
        id={props.id}
        name={props.id}
        onChange={handleChange}
        placeholder={props.placeholder}
        type="text"
        value={value}
        pattern={props.pattern}
      />
    </label>
  );
});
