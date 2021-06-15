import React from 'react';
import UserItem from './UserItem';
import Card from '../UI/Card.js';
import classes from './UsersList.module.css';



const UsersList = props => {
  console.log(props);
  return (
    <Card className={classes.users}>
    <ul className="users">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          onDelete={props.onDeleteItem}
        >
          {user.user} ({user.age} years old)
        </UserItem>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;