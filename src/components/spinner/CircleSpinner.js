import classes from './CircleSpinner.module.css';
import React from 'react';

const CircleSpinner = ({ width = 30, height = 30, color = '#798e98' }) => {
  return (
    <div className={classes.wrapper}>
      <svg
        className={classes.spinner}
        viewBox='0 0 50 50'
        width={width}
        height={height}
      >
        <circle
          className={classes.path}
          cx='25'
          cy='25'
          r='20'
          fill='none'
          stroke={color}
          strokeWidth='5'
        ></circle>
      </svg>
    </div>
  );
};

export default CircleSpinner;
