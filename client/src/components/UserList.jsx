import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users')
        setUsers(response.data)
      } catch (error) {
        console.error("Error fetching users", error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 mt-6">
      <h3 className="font-bold text-slate-800 mb-4">Active Team Members</h3>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user._id} className="text-slate-600 flex justify-between border-b pb-2">
            <span>{user.name}</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList