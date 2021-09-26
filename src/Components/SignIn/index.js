import React from 'react';
// // images
import SIGNIN from '../../images/AccountSignIn.png';
// // styles
import styles from "./SignIn.css";

// export default SignIn;
const SignIn = (props) => (
      <div>
        <div className={["d-block d-sm-block d-md-none"].join(" ")}>
          <img
            onClick={props.click}
            src='../../images/cancel-black.png'
            className={styles.closeBtn}
            alt=""
          />
          <p className={styles.createAcc}>Welcome back!</p>
          <p className={styles.signUp} onClick={props.click}>
            or,Create Account
          </p>
          <p className={styles.terms}>Forgot Password?</p>
          <img src='../../images/signin.png' alt="" className={styles.input} />
          <img
            src='../../images/signinBut.png'
            alt=""
            className={styles.createAccBtn}
          />
          <img src='../../images/fbSignIn.png' alt="" className={styles.fbSignIn} />
          <img
            src='../../images/googleSignIn.png'
            alt=""
            className={styles.googleSignIn}
          />
        </div>
        <div className={["d-none d-md-block"].join(" ")}>
          <img
            onClick={props.click}
            className={styles.cross}
            src='../../images/cancel-white.png'
            alt=""
          />
          <img
            onClick={props.click}
            className={styles.image}
            src={SIGNIN}
            alt=""
          />
        </div>
      </div>
    );
  
export default SignIn;
  