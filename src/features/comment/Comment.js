import React, { useMemo, useState } from 'react';
import Meta from '../../components/meta/Meta';
import SlideDown from '../../components/slide-down/SlideDown';
import classes from './Comment.module.css';
import Comments from '../comments/Comments';
import { htmlDecode } from '../../utils/htmlDecode';

const Comment = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible((v) => !v);
  const { text, time, by, kids } = data || {};
  const parsedText = useMemo(() => htmlDecode(text), [text]);

  return (
    <li className={classes.comment}>
      <Meta by={by} time={time} />
      <div className={classes.text}>{parsedText}</div>
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
