import React, { useState } from 'react';
import Meta from '../../components/meta/Meta';
import SlideDown from '../../components/slide-down/SlideDown';
import classes from './Comment.module.css';
import Comments from '../comments/Comments';

const Comment = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible((v) => !v);
  const { text, time, by, kids } = data || {};

  return (
    <li className={classes.comment}>
      <Meta by={by} time={time} />
      <div className={classes.text}>{text}</div>
      {kids && (
        <>
          <button className={classes.more} onClick={handleClick}>
            {visible ? 'hide replies' : 'show replies...'}
          </button>
          <SlideDown in={visible}>
            <Comments ids={kids} />
          </SlideDown>
        </>
      )}
    </li>
  );
};
export default Comment;
