import React, { FunctionComponent, useEffect, useReducer} from 'react';
import Button from '../UI/Button';
import classes from './JobForm.module.css';

type formStateType = {
  title : string;
  name : string;
  address1 : string;
  address2 : string;
  phone : string;
  jobType : string;
  isNameValid : boolean;
  isTitleValid : boolean;
  isAddress1Valid : boolean;
  isAddress2Valid : boolean;
  isFormValid : boolean;
  isPhoneValid : boolean;
} ;

type actionType = {
  type : string;
  value : string;
  nextState : formStateType
} ;

const initialFormState : formStateType = {
  title : '',
  name : '',
  address1 : '',
  address2 : '',
  phone : '',
  jobType : '',
  isNameValid : false,
  isTitleValid : false,
  isAddress1Valid : false,
  isAddress2Valid : false,
  isFormValid : false,
  isPhoneValid : false
};

const isTitleValid = (input : string) : boolean => {
  const titles = ['Mr.', 'Mrs.', 'Miss']
  let isValid = true;
  if(input === '' || input.length<3 || titles.filter(item => item.toLowerCase() === input.toLowerCase()).length === 0){
    isValid = false;
  }
  return isValid;
};

const isFormValid = (state:formStateType, currentElement : string) : boolean =>{
  let elements : string[] = ['isAddress1Valid', 'isAddress2Valid', 'isTitleValid', 'isNameValid', 'isPhoneValid'];
  let isValid = true;
  elements.forEach(element => {
    if(element !== currentElement){
      isValid = isValid && state[element as keyof formStateType] as boolean;
    }
  });
  return isValid;
}

const formStateReducer = (state : formStateType, action: actionType) : formStateType =>{
  let isInputValid = true;
  if(action.value === '' || action.value.length < 3){
    isInputValid = false;
  }

  if(action.type === 'TITLE'){
    return {
      ...state,
      title : action.value,
      isTitleValid : isTitleValid(action.value),
      isFormValid : isFormValid(state, 'isTitleValid') && isInputValid
    }
  }
  else if(action.type === 'NAME'){
    return {...state,
      name : action.value,
      isNameValid : isInputValid,
      isFormValid : isFormValid(state, 'isNameValid') && isInputValid,
    }
  }
  else if(action.type === 'ADDRESS1'){
    return {...state,
      address1 : action.value,
      isAddress1Valid : isInputValid,
      isFormValid : isFormValid(state, 'isAddress1Valid') && isInputValid,
    }
  }
  else if(action.type === 'ADDRESS2'){
    return {...state,
      address2 : action.value,
      isAddress2Valid : isInputValid,
      isFormValid : isFormValid(state, 'isAddress2Valid') && isInputValid,
    }
  }
  else if(action.type === 'PHONE'){
    isInputValid = isInputValid && action.value.length === 10
    return {...state,
      phone : action.value,
      isPhoneValid : isInputValid,
      isFormValid : isFormValid(state, 'isPhoneValid') && isInputValid,
    }
  }
  else if (action.type === 'FORM'){
    return {
      ...state,
      isTitleValid : action.nextState.isTitleValid,
      isNameValid : action.nextState.isNameValid,
      isAddress1Valid : action.nextState.isAddress1Valid,
      isPhoneValid : action.nextState.isPhoneValid
    }
  }

  return {
    title : '',
    name : '',
    address1 : '',
    address2 : '',
    phone : '',
    jobType : '',
    isNameValid : true,
    isTitleValid : true,
    isAddress1Valid : true,
    isAddress2Valid : true,
    isFormValid : false,
    isPhoneValid : true
  };

};

const JobForm : FunctionComponent<{}> = (props)=>{	
	
  const [formState, setFormState] = useReducer(formStateReducer, initialFormState);

  // The useEffect is used to set the initial form input controls to 'True' state.
  // The blank dependency makes sure that UseEffect is executed only once in a life time of the component
  useEffect(()=>{
    setFormState({type: '', value: '', nextState:initialFormState});
  }, []);

  const formValidation = (state : formStateType) : boolean =>{
    let isValid = true;

    state.isTitleValid = isTitleValid(state.title);

    if(state.name.trim() === '' || state.name.trim().length === 0){
      state.isNameValid = false;
      isValid = false;
    }

    if(state.address1.trim() === '' || state.address1.trim().length === 0){
      state.isAddress1Valid = false;
      isValid = false;
    }

    if(state.phone.trim() === '' || state.phone.trim().length === 0 || state.phone.trim().length < 10){
      state.isPhoneValid = false;
      isValid = false;
    }

    setFormState({type : 'FORM', value : '', nextState:state});

    isValid = isFormValid(state, '');

    return isValid;
  }

  // Handlers
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setFormState({type : 'TITLE', value : value, nextState:initialFormState});
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setFormState({type : 'NAME', value : value, nextState:initialFormState});
  };

  const address1ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setFormState({type : 'ADDRESS1', value : value, nextState:initialFormState});
  };

  const address2ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setFormState({type : 'ADDRESS2', value : value, nextState:initialFormState});
  };

  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setFormState({type : 'PHONE', value : value, nextState:initialFormState});
  };

  const submitHandler = (event: React.FormEvent) => {
	  event.preventDefault();
    if(formValidation(formState)){
      console.log("Submitted");
    };
  };

  const cancelHandler = () =>{
  }

  return (
	<form onSubmit={submitHandler}>
	  <div className={classes.newJob__controls}>
      <div className={`${classes.newJob__control} ${
            formState.isTitleValid === false ? classes.invalid : ''
          }`}>
        <label htmlFor="title">Title</label>
        <input
          type='text'
          id='title'
          value = {formState.title}
          onChange={titleChangeHandler} />
      </div>
      <div className={`${classes.newJob__control} ${
            formState.isNameValid === false ? classes.invalid : ''
          }`}>
        <label htmlFor="name">Name</label>
        <input 
          type='text'
          id='name'
          value = {formState.name}
          onChange={nameChangeHandler} />
      </div>
      <div className={`${classes.newJob__control} ${
            formState.isAddress1Valid === false ? classes.invalid : ''
          }`}>
        <label htmlFor="address1">Address Line 1</label>
        <input 
          type='text'
          id='address1'
          value = {formState.address1}
          onChange={address1ChangeHandler} />
      </div>
      <div className={`${classes.newJob__control} ${
            formState.isAddress2Valid === false ? classes.invalid : ''
          }`}>
        <label htmlFor="address2">Address Line 2</label>
        <input 
          type='text'
          id='address2'
          value = {formState.address2}
          onChange={address2ChangeHandler} />
      </div>
      <div className={`${classes.newJob__control} ${
            formState.isPhoneValid === false ? classes.invalid : ''
          }`}>
        <label htmlFor="Phone">Phone</label>
        <input 
          type='number'
          id='Phone'
          value = {formState.phone}
          onChange={phoneChangeHandler} />
      </div>
	  </div>
	  <div className={classes.newJob__actions}>
      <Button onClick={cancelHandler} type='button' disabled={false}>Cancel</Button>
      <Button onClick={submitHandler} type="submit" disabled={false}>Add Job</Button>
	  </div>
	</form>);
};

export default JobForm;