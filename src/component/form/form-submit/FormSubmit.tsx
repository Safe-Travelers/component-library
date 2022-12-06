import './FormSubmit.css';

export interface FormSubmitProps {
  value?: string;
}

export const FormSubmit = ({value}: FormSubmitProps) => {
  return (
    <input
      className='slr-button rclib-form-input rclib-form-submit'
      type='submit'
      value={value}
    />
  );
}

export default FormSubmit;
