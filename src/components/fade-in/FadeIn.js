import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeIn.css';

const FadeIn = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={350}
      classNames='fade'
      mountOnEnter
      unmountOnExit
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

export default FadeIn;
