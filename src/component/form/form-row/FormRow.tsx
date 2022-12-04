import { ReactNode } from 'react';
import './FormRow.css';

export interface FormRowProps {
  children?: ReactNode;
}

export const FormRow = ({children}: FormRowProps) => {
  return (
    <div className='form-row'>
      { children }
    </div>
  );
}

