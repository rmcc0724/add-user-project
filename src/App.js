import React, { useState } from 'react'
import UsersList from './components/Users/UsersList'
import AddUser from './components/Users/AddUser'

const App = () => {
  const [users, setUsers] = useState([
    { user: 'Donald', age: 74, id: 'g1' },
    { user: 'Joe', age: 78, id: 'g2' },
  ])

  const addUserHandler = (enteredUser, enteredAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          user: enteredUser,
          age: parseInt(enteredAge),
          id: Math.random().toString(),
        },
      ]
    })
  }

  const deleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId)
      return updatedUsers
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList items={users} onDeleteUser={deleteUserHandler}/>
    </div>
  )
}

export default App
