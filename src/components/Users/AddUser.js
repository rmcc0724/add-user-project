import React, { useState } from 'react';
import Button from '../UI/Button.js';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';


const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isValid, setIsValid] = useState(true)



  const userInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUser(event.target.value)
  }
  
  const ageInputChangeHandler = (event) => {
    if(event.target.value > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUser.trim().length === 0 || enteredAge < 1) {
      setIsValid(false)
      return
    }

    props.onAddUser(enteredUser, enteredAge)
  }

    return (
      <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
          <label htmlFor="username" >Username</label>
          <input id="username" type="text" onChange={userInputChangeHandler}/>
          <label htmlFor="username" >Age (Years)</label>
          <input id="age" type="number" onChange={ageInputChangeHandler}/>
          <Button type="submit">Add User</Button>
      </form>
      </Card>
    );
  }
  export default AddUser;