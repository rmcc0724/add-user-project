import React from 'react';
import UserItem from './UserItem';
import Card from '../UI/Card.js';
import classes from './AddUser.module.css';
import './UserItem.module.css';


const UsersList = props => {
  console.log(props);
  return (
    <Card className={classes.input}>
    <ul className="users">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          onDelete={props.onDeleteItem}
        >
          {user.user + " " + user.age}
        </UserItem>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;