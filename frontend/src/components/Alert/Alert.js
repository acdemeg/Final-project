import React from 'react';
import { connect } from 'react-redux';
import { HIDE_ALERT } from '../../store/actions';
import { CSSTransition } from 'react-transition-group';
import Button from './Button';
import AlertText from './AlertText';
import './Alert.css';

const Alert = ({ visibleAlert, textAlert, scene, typeAlert, onAlert }) => {
  return (
    <CSSTransition
      in={visibleAlert}
      timeout={{
        enter: 1300,
        exit: 200,
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <div className="notification">
        <Button onAlert={onAlert} />
        <AlertText scene={scene} textAlert={textAlert} />
      </div>
    </CSSTransition>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAlert: () => dispatch(HIDE_ALERT()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Alert);