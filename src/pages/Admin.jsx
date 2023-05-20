import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3030/users')
    .then(res => {
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, [])
  return (
    <div className='container w-fit'>
      <div className="text-end mb-4">
        <Link to = '/create-member'>
        <button className='btn bg-green-800'>Add Member</button>
        </Link>
        </div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.savings}</td>
                <td>{d.balance}</td>
                <td>Edit/Del</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Admin