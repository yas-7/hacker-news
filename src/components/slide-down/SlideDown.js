import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';

const styles = {
  exited: { display: 'none' },
  exiting: {
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    transition: '0.35s ease',
    transitionProperty: 'height, visibility',
  },
  entering: {
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    transition: '0.35s ease',
    transitionProperty: 'height, visibility',
  },
  entered: { display: 'block' },
};

const SlideDown = ({ in: inProp, children }) => {
  const nodeRef = useRef(null);
  const handleEnter = () => {
    nodeRef.current.style.height = '0';
  };

  const handleEntering = () => {
    nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
  };

  const handleEntered = () => {
    nodeRef.current.style.height = null;
  };
  const handleExit = () => {
    nodeRef.current.style.height = nodeRef.current.offsetHeight + 'px';
    nodeRef.current.offsetHeight;
  };

  const handleExiting = () => {
    nodeRef.current.style.height = '0';
  };

  return (
    <Transition
      in={inProp}
      nodeRef={nodeRef}
      timeout={350}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div ref={nodeRef} style={styles[state]}>
          {children}
        </div>
      )}
    </Transition>
  );
};

export default SlideDown;
