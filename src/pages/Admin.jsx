import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Admin() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const Navigate = useNavigate();

  useEffect(()=> {
    axios.get('http://localhost:3030/users')
    .then(res => {
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, [])
  return (
    <div className='container w-fit mt-[30vh] m-auto'>
      <div className="text-end mb-4">
        <Link to = '/create-member'>
        <button className='btn bg-green-800'>Add Member</button>
        </Link>
        </div>
      <table className='table text-center'>
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
                <td>{d.loan}</td>
                <td>{d.loan_repayment}</td>
                <td>{d.purchase}</td>
                <td className=''>
                  <Link to = {`/update/${d.id}`}><button className='btn bg-blue-400 mr-2'>Edit</button></Link>
                  <button onClick={e => handleSubmit(d.id)} className='btn bg-red-400'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const conf = window.confirm("Do you want to delete");
    if(conf){
      axios.delete('http://localhost:3030/users/'+id)
      .then(res => {
        alert('Member has been deleted!')
        Navigate('/admin')
      }).catch(err => console.log(err))
    }
  }
}

export default Admin