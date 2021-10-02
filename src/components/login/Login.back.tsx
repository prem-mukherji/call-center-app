import React, { FunctionComponent, useState } from "react";
import classes from './Login.module.css';

const Login2 : FunctionComponent<{}> = (props) => {

  const [enteredValue, setEnteredValue] = useState<string>('UserName');

  const onFocusHandler = (event : React.FocusEvent) => {
    console.log("writing...");
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) =>{
    console.log(event);
    setEnteredValue(event.currentTarget.value)
  };

  const onChangeHandler = (event: React.FocusEvent<HTMLInputElement>) =>{
    console.log(event);
    setEnteredValue(event.currentTarget.value);
  };

  return (<div> 
    <input id="userName" type="text" value={enteredValue} onFocus={onFocusHandler} onChange={onChangeHandler} />
    <input id="userName1" type="text" placeholder="User Email" onBlur={onBlurHandler}  />
  </div>);
}

export default Login2;