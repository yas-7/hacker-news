import React from 'react';
import { getFormatedDate } from '../../utils/getFormatedDate';
import classes from './Meta.module.css';

const Meta = ({ by, time, score }) => (
  <div className={classes.info}>
    <span className={classes.author}>{by}</span>
    <span className={classes.date}>{getFormatedDate(time)}</span>
    {score && <span className={classes.score}>{score}</span>}
  </div>
);

export default Meta;
