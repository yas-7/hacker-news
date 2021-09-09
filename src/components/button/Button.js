import classes from './Button.module.css';
import React from 'react';

const Button = ({ children, onClick, disabled, className }) => (
  <button
    className={`${classes.button} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
