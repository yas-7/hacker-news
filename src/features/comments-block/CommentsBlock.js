import React from 'react';
import classes from './CommentsBlock.module.css';
import Comments from '../comments/Comments';
import Button from '../../components/button/Button';

const CommentsBlock = ({ ids, descendants, refetch, isFetching }) => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <h2 className={classes.title}>
          {descendants > 0 && ids ? `Comments: ${descendants}` : 'No comments'}
        </h2>
        <Button onClick={refetch} disabled={isFetching}>
          Manually refetch
        </Button>
      </header>

      {descendants > 0 && ids && <Comments ids={ids} />}
    </div>
  );
};

export default CommentsBlock;
