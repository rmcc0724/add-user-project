import React from 'react';

import './UserItem.module.css';

const UserItem = props => {

const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="user-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UserItem;