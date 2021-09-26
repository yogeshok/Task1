import styles from "./SignUp.css";

const SignUp = (props) => (
    <div>
      <div className={[styles.container, "d-block d-sm-block d-md-none"].join(" ")}>
        <img
          onClick={props.click}
          src='../../images/cancel-black.png'
          className={styles.closeBtn}
          alt=""
        />
        <p className={styles.createAcc}>Create Account</p>
        <p className={styles.signIn} onClick={props.click}>
          or,Sign in
        </p>
        <img className={styles.terms} src='../../images/terms.png' alt="" />
        <img src='../../images/Group3.png' alt="" className={styles.input} />
        <img
          src='../../images/createAccount.png'
          alt=""
          className={styles.createAccBtn}
        />
        <img src='../../images/fbSignUp.png' alt="" className={styles.fbSignUp} />
        <img
          src='../../images/googleSignUp.png'
          alt=""
          className={styles.googleSignUp}
        />
      </div>
      <div className={"d-none d-md-block"}>
        <img
          onClick={props.click}
          className={styles.cross}
          src='../../images/cancel-white.png'
          alt=""
        />
        <img
          onClick={props.click}
          className={styles.image}
          src='../../images/createNewAccount.png'
          alt=""
        />
      </div>
    </div>
  );

export default SignUp;