import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'

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
  console.log(users);
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  )
}

export default App
