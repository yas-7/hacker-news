import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useGetItemsByIdQuery } from '../../services/newsApi';
import Button from '../../components/button/Button';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import Meta from '../../components/meta/Meta';
import CommentsBlock from '../comments-block/CommentsBlock';
import Spinner from '../../components/spinner/Spinner';
import { POLLING_INTERVAL } from '../../constants';
import classes from './NewsDetail.module.css';

const NewsDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, isLoading, error, refetch, isFetching } = useGetItemsByIdQuery(
    id,
    { pollingInterval: POLLING_INTERVAL }
  );

  const { url, title, time, by, descendants, kids } = data || {};

  const goToPrevPage = () => {
    history.goBack();
  };

  if (error) return <ErrorMessage />;

  if (isLoading) return <Spinner />;

  if (!data) return <ErrorMessage>There is no data available (:</ErrorMessage>;

  return (
    <>
      <Button className={classes.buttonBack} onClick={goToPrevPage}>
        Go back
      </Button>
      <Meta by={by} time={time} />
      <h1 className={classes.title}>{title}</h1>
      <a className={classes.link} href={url} target='_blank' rel='noreferrer'>
        {url}
      </a>
      <CommentsBlock
        ids={kids}
        descendants={descendants}
        refetch={refetch}
        isFetching={isFetching}
      />
    </>
  );
};

export default NewsDetail;
