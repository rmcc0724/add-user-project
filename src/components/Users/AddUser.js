import React, { useRef, useState } from 'react';
import Button from '../UI/Button.js';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal.js';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUser, setEnteredUser] = useState('')
  // const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  // const userInputChangeHandler = (event) => {
  //   if (event.target.value.trim().length > 0) {
  //   }
  //   setEnteredUser(event.target.value)
  // }

  // const ageInputChangeHandler = (event) => {
  //   if (event.target.value > 0) {
  //   }
  //   setEnteredAge(event.target.value)
  // }

  const addUserHandler = (event) => {
    const enteredUser = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value
    ;
    event.preventDefault()
    if (
      enteredUser.trim().length === 0 ||
      enteredAge.trim().length === 0 
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty value).'
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid age (> 0).'
      })
      return
    }

    props.onAddUser(enteredUser, enteredAge)
    // setEnteredUser('')
    // setEnteredAge('')
    nameInputRef.current.value = '';
    ageInputRef.current.value = ''; 

  }

  const hideModal = () => {
    setError(null);
  }

  return (
    <React.Fragment>      
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={hideModal} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={userInputChangeHandler}
            // value={enteredUser}
            ref={nameInputRef}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageInputChangeHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </React.Fragment>      
  )
}
export default AddUser
