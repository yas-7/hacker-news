import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Meta from '../../components/meta/Meta';
import { useGetItemsByIdQuery } from '../../services/newsApi';
import classes from './ListItem.module.css';
import { useOnScreen } from '../../hooks/useOnScreen';
import ErrorMessage from '../../components/error-message/ErrorMessage';

const ListItem = ({ id }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  const { data, isLoading, error } = useGetItemsByIdQuery(id, {
    skip: !isOnScreen,
  });

  const { title, time, by, score } = data || {};

  return (
    <li ref={ref} className={classes.wrapper}>
      {error && <ErrorMessage>Could not retrieve the news</ErrorMessage>}
      {isLoading && <div className={classes.loadingLine}></div>}
      {data && (
        <Link to={`/news/${id}`} className={classes.link}>
          <Meta by={by} score={score} time={time} />
          <div className={classes.title}>{title}</div>
        </Link>
      )}
    </li>
  );
};

export default React.memo(ListItem);
