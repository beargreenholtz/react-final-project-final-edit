import classes from './FormButton.module.sass';

const ButtonUI = (props) => {
  return (
    <button
      type={props.type}
      className={classes.btn}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonUI;
