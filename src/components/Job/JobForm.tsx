import React, { FunctionComponent, useState } from 'react';
import Button from '../UI/Button';
import classes from './JobForm.module.css';

const JobForm : FunctionComponent<{}> = (props)=>{	
	
  // Set state initially
  const [userInput, setUserInput] = useState({
    enteredTitle : '',
    enteredName: '',
    enteredAddress: ''
  });

  // Handlers
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: value}
    })
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setUserInput((prevState) => {
      return { ...prevState, enteredName: value}
    })
  };

  const addressChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setUserInput((prevState) => {
      return { ...prevState, enteredAddress: value}
    })
  };

  const submitHandler = (event: React.FormEvent) => {
	  event.preventDefault();
  };

  const cancelHandler = () =>{
    //props.OnCancelClick();
  }

  return (
	<form onSubmit={submitHandler}>
	  <div className={classes.newJob__controls}>
      <div className={classes.newJob__control}>
        <label htmlFor="title">Title</label>
        <input
          type='text'
          id='title'
          value = {userInput.enteredTitle}
          onChange={titleChangeHandler} />
      </div>
      <div className={classes.newJob__control}>
        <label htmlFor="name">Name</label>
        <input 
          type='text'
          id='name'
          value = {userInput.enteredName}
          onChange={nameChangeHandler} />
      </div>
      <div className={classes.newJob__control}>
        <label htmlFor="address">Address</label>
        <input 
          type='text'
          id='address'
          value = {userInput.enteredAddress}
          onChange={addressChangeHandler} />
      </div>
	  </div>
	  <div className={classes.newJob__actions}>
      <Button onClick={cancelHandler} type='button' >Cancel</Button>
      <Button onClick={cancelHandler} type="submit">Add Job</Button>
	  </div>
	</form>);
};

export default JobForm;