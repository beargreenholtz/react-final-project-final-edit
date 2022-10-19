import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.sass';

const dropIn = {
  hidden: {
    y: '-60px',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Backdrop = (props) => {
  return (
    <div
      className={
        !props.exitAni
          ? `${classes.backdrop}`
          : `${classes.backdrop} ${classes.backdropAni}`
      }
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={
        !props.exitAni
          ? `${classes.modal}`
          : `${classes.modal} ${classes.modalani}`
      }
      variants={dropIn}
      initial="hidden"
      animate="visible"
    >
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} exitAni={props.exitAni} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <ModalOverlay exitAni={props.exitAni}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
