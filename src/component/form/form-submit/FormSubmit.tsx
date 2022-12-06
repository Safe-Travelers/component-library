import './FormSubmit.css';

export interface FormSubmitProps {
  disabled?: boolean;
  value?: string;
}

export const FormSubmit = ({disabled, value}: FormSubmitProps) => {
  return (
    <input
      className={`slr-button rclib-form-input rclib-form-submit ${disabled ? 'rclib-form-submit-disabled' : ''}`}
      type='submit'
      value={value}
    />
  );
}

export default FormSubmit;
