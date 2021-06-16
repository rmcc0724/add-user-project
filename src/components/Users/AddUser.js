import React, { useState } from 'react'
import Button from '../UI/Button.js'
import Card from '../UI/Card.js'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal.js'

const AddUser = (props) => {
  let error = ''
  const [enteredUser, setEnteredUser] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isValid, setIsValid] = useState(true)

  const userInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredUser(event.target.value)
  }

  const ageInputChangeHandler = (event) => {
    if (event.target.value > 0) {
      setIsValid(true)
    }
    setEnteredAge(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault()
    if (
      enteredUser.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredAge < 1
    ) {
      setIsValid(false)
      return
    }

    props.onAddUser(enteredUser, enteredAge)
    setEnteredUser('')
    setEnteredAge('')
  }

  const hideModal = () => {
    setIsValid(true);
  }

  if (!isValid) {
    error = (
      <ErrorModal title="An Error Occurred!" message="Something went wrong!" clearError={hideModal} />
    )
  }

  return (
    <div>
      {error}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userInputChangeHandler}
            value={enteredUser}
          />
          <label htmlFor="username">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageInputChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}
export default AddUser
