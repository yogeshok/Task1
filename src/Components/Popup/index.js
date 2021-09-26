import styles from "./Modal.css";
import SignUp from "../../components/forms/SignUp/SinghUp";
import SignIn from "../../components/forms/SignIn/SignIn";

const Popup = (props) => {
  let classes = [];
  let output = null;

  if (props.show) {
    classes = [styles.container, styles.show];
  } else {
    classes = [styles.container, styles.hide];
  }

  if (props.showSignIn) {
    output = (
      <SignIn
        click={props.click}
        show={props.showSignIn}
        switch={props.switch}
        signup={props.toggle}
        className={["col-12 col-md-6"].join(" ")}
      ></SignIn>
    );
  } else {
    output = (
      <SignUp
        click={props.click}
        show={props.showSignUp}
        signin={props.toggle}
        className={["col-12 col-md-6"].join(" ")}
      ></SignUp>
    );
  }

  return (
    <div className={classes.join(" ")}>
      <div className={styles.formContainer}>{output}</div>
    </div>
  );
};

export default Popup;
