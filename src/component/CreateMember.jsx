import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateMember() {
  const [inputData, setInputData] = useState({name:'', email:'', savings:'', balance:'', loan:'', loan_repayment: '', purchase: '' })

  const navigat = useNavigate();

  function handleSubmit(event){
    event.preventDefault()

    axios.post('http://localhost:3030/users', inputData)
    .then(res => {
      alert("Member Created Successfully!");
      navigat('/admin'); 
    }).catch(err => console.log(err));
  }
  return (
    <div className='container w-[600px]'>
     <p> <Link to ='/admin'>Dashboard</Link> | <span className='text-slate-300'>Create-Member</span></p>
      <form className='flex flex-col gap-4 text-center mt-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' name='name' className='form-input' 
        onChange={e=>setInputData({...inputData, name: e.target.value})}
        />
        <input type="email" placeholder='Enter email' name='email' className='form-input'
         onChange={e=>setInputData({...inputData, email: e.target.value})}
        />
        <input type="text" placeholder='Enter savings' name='savings' className='form-input'
         onChange={e=>setInputData({...inputData, savings: e.target.value})}
        />
        <input type="text" placeholder='Enter balance' name='balance' className='form-input' id="" 
         onChange={e=>setInputData({...inputData, balance: e.target.value})}
        />
        <input type="submit"  className='btn' value='submit'/>
      </form>
    </div>
  )
}

export default CreateMember