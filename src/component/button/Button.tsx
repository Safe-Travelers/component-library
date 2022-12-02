import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => any;
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      className='react-component-lib-button'
      onClick={handleClick}
      type='button'
      {...props}
    >
      { children ? children : 'Button' }
    </button>
  );
}
