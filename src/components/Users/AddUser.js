import React from 'react';
import Button from '../../Button.js';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';


const AddUser = (props) => {

  const addUserHandler = (event => {
    event.preventDefaault();
  })

    return (
      <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
          <label htmlFor="username" >Username</label>
          <input id="username" type="text" />
          <label htmlFor="username" >Age (Years)</label>
          <input id="age" type="number"/>
          <Button type="submit">Add User</Button>
      </form>
      </Card>

    );
  }
  
  export default AddUser;