import React from 'react';
import { useGetNewStoriesQuery } from '../../services/newsApi';
import ListItem from '../news-list-item/ListItem';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import Spinner from '../../components/spinner/Spinner';
import Button from '../../components/button/Button';
import { MAX_NEWS_NUMBER, POLLING_INTERVAL } from '../../constants';
import classes from './NewsList.module.css';

const NewsList = () => {
  const { data, error, isFetching, refetch } = useGetNewStoriesQuery(
    undefined,
    { pollingInterval: POLLING_INTERVAL }
  );

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>The last Hacker News</h2>
      {error && <ErrorMessage />}
      {!data && isFetching && <Spinner />}
      {data && data.length === 0 && <div>No news :(</div>}
      {data && data.length > 0 && (
        <>
          <Button
            onClick={refetch}
            disabled={isFetching}
            className={classes.btn}
          >
            Manually refetch
          </Button>
          <ul className={classes.list}>
            {data.slice(0, MAX_NEWS_NUMBER).map((id) => (
              <ListItem key={id} id={id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NewsList;
