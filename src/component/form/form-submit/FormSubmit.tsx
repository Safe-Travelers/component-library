import './FormSubmit.css';

export interface FormSubmitProps {
  text?: string;
  disabled?: boolean;
}

export const FormSubmit = ({text, disabled}: FormSubmitProps) => {
  return (
    <input
      className='rclib-form-element form-submit'
      type='submit'
      value={text}
      disabled={disabled}
    />
  );
}

export default FormSubmit;
