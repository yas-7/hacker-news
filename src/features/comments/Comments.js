import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CircleSpinner from '../../components/spinner/CircleSpinner';
import { newsApi } from '../../services/newsApi';
import classes from './Comments.module.css';
import Comment from '../comment/Comment';
import FadeIn from '../../components/fade-in/FadeIn';
import ErrorMessage from '../../components/error-message/ErrorMessage';

const Comments = ({ ids }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [allData, setAllData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(async () => {
    let results;

    if (ids) {
      setShowSpinner(true);
      const fetch = (id) =>
        dispatch(newsApi.endpoints.getItemsById.initiate(id));
      try {
        results = await Promise.all(ids.map(fetch));
        setAllData(results);
      } catch (error) {
        setError(error);
      }
      setShowSpinner(false);
    }

    return () => {
      if (results) {
        results.map((result) => result.unsubscribe());
      }
    };
  }, [ids]);

  if (error)
    return <ErrorMessage>Could not retrieve the comments</ErrorMessage>;

  return (
    <>
      {showSpinner && <CircleSpinner />}
      <FadeIn in={!showSpinner && allData.length > 0}>
        <ul className={classes.list}>
          {allData.map((item) =>
            !item.data || item.data.deleted ? null : (
              <Comment key={item.data.id} data={item.data} />
            )
          )}
        </ul>
      </FadeIn>
    </>
  );
};
export default Comments;
