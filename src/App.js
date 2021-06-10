import React, { useState } from 'react'
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

const App = () => {
  const [users, setUsers] = useState([
    { user: 'Donald', age: 74, id: 'g1' },
    { user: 'Joe', age: 78, id: 'g2' },
  ])

  const addUserHandler = (enteredUser, enteredAge) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers]
      updatedUsers.unshift({
        user: enteredUser,
        age: parseInt(enteredAge),
        id: Math.random().toString(),
      })
      return updatedUsers
    })
  }

  const deleteUserHandler = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  // let content = (
  //   <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  // );

  // if (users.length > 0) {
  //   content = (
  //     <UsersList items={users} onDeleteUser={deleteUserHandler} />
  //   );
  // }
  // console.log(content);
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList items={users}/>
      {/* <section>
        {content}
      </section> */}
    </div>
  )
}

export default App
