import React, { FunctionComponent, useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './Login.module.css';



const Login: FunctionComponent<{}> = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  
  useEffect(()=>{
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid])

  useEffect(()=>{
    setIsFormValid(false);
  }, [])

  const emailOnBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    let isValid = enteredEmail !== null && enteredEmail.length > 0 && enteredEmail.includes('@');
    setIsEmailValid(isValid);
    //setIsFormValid(isValid && isPasswordValid);
  };

  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = event.currentTarget.value !== null && event.currentTarget.value.length > 0 && event.currentTarget.value.includes('@');
    setIsEmailValid(isValid);
    setEnteredEmail(event.currentTarget.value);
  };

  const passwordOnBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    let isValid = enteredPassword !== null && enteredPassword.length > 8;
    setIsPasswordValid(isValid);
    console.log('IsFormValid : ', isEmailValid && isValid)
  };

  const passwordOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let isValid = event.currentTarget.value !== null && event.currentTarget.value.length > 8;
    setIsPasswordValid(isValid);
    setEnteredPassword(event.currentTarget.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // if(formState.isFormValid){
    //   props.onLogin();
    // }
  };

  const emailClass = `${classes.control} ${!isEmailValid ? classes.invalid : ''}`;
  const passwordClass = `${classes.control} ${!isPasswordValid ? classes.invalid : ''}`;
  const formClass = `${classes.actions} ${classes.control} ${!isFormValid ? classes.disable : ''}`;

  return (<Card className={classes.login}>
    <form onSubmit={submitHandler}>
      <div className={emailClass}>
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailOnBlurHandler}
          onChange={emailOnChange}
          placeholder='someone@email.com'
        />
      </div>
      <div className={passwordClass}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onBlur={passwordOnBlurHandler}
          onChange={passwordOnChange}
          placeholder='password'
        />
      </div>
      <div className={formClass}>
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </div>
    </form>
  </Card>);
}

export default Login;