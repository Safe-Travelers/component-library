import { FormEvent, ReactNode } from 'react';
import '../FormCommon.css';
import './FormContainer.css';

export interface FormContainerProps {
  children?: ReactNode;
  onSubmit: () => any;
}

export const FormContainer = ({children, onSubmit}: FormContainerProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      { children }
    </form>
  );
}

