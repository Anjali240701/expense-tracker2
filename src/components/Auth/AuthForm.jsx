import React, { useRef } from "react";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";


const AuthForm = (props) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;
    if (
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      password === confirmPassword
    ) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXLa4m2AbfwfjEEoi8ijV2wWJvFgJjeOU",
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Signup failed");
        }
        const data = await response.json();
        dispatch(
          authActions.login({
            token: data.idToken,
            email: email.replace(/[@.]/g, ""),
          })
        );
      navigate("/expense", { replace: true });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>SignUp</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="authEmail">Email</label>
          <input type="email" id="authEmail" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="authPassword">Password</label>
          <input
            type="password"
            id="authPassword"
            required
            minLength="7"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            minLength="7"
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
      <div className={classes.actions}>
        <button type="button" onClick={() => navigate("/login", { replace: true })}>
          Login with existing account
        </button>
      </div>
    </section>
  );
};

export default AuthForm;
