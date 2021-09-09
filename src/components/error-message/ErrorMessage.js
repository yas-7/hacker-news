import React from 'react';
import classes from './ErrorMessage.module.css';

const ErrorMessage = ({
  children = 'Something went wrong. Please reload the page!',
}) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default ErrorMessage;
