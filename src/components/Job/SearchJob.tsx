import { FunctionComponent, useState } from "react";
import Button from '../UI/Button';
import classes from './SearchJob.module.css';

const SearchJob: FunctionComponent<{}> = (props) => {

  const[searchValue, setSearchValue] = useState('');
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(searchValue !== null && searchValue !== '' && searchValue.trim().length > 0){
      console.log('search Submitted', searchValue);
    }
  };

  // Handlers
  const searchJobChangeHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const value = event.currentTarget.value;
    setSearchValue(value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.search__controls}>
        <div className={`${classes.search__control}`}>
          <label htmlFor="searchJob">Search Job</label>
          <input
            type='text'
            id='searchJob'
            value = {searchValue}
            placeholder = 'John Doe, 7780901060'
            onChange={searchJobChangeHandler} />
        </div>
      </div>
      <div className={classes.search__actions}>
        <Button onClick={submitHandler} type="submit" disabled={false}>Search</Button>
      </div>
    </form>);
};

export default SearchJob;