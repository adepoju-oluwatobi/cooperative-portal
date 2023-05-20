import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const {id} = useParams();
  const [data, setData] = useState([])
  const Navigate = useNavigate()
  useEffect(()=> {
    axios.get('http://localhost:3030/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  function handleSubmit(event){
    event.preventDefault()
    axios.put('http://localhost:3030/users/'+id, data)
    .then(res => {
      alert("Data Updated Successfully!");
      Navigate('/admin')
    })
  }
  return (
    <div>
       <div className='text-center container'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' name='name' className='form-input' 
          value={data.name} onChange={e => setData({...data, name: e.target.value})}
        />
        <input type="email" placeholder='Enter email' name='email' className='form-input'
          value={data.email} onChange={e => setData({...data, email: e.target.value})}
        />
        <input type="text" placeholder='Enter savings' name='savings' className='form-input'
          value={data.savings} onChange={e => setData({...data, savings: e.target.value})}
        />
        <input type="text" placeholder='Enter balance' name='balance' className='form-input' id="" 
          value={data.balance} onChange={e => setData({...data, balance: e.target.value})}
        />
         <input type="text" placeholder='Enter balance' name='balance' className='form-input' id="" 
          value={data.loan} onChange={e => setData({...data, loan: e.target.value})}
        />
         <input type="text" placeholder='Enter balance' name='balance' className='form-input' id="" 
          value={data.loan_repayment} onChange={e => setData({...data, loan_repayment: e.target.value})}
        />
         <input type="text" placeholder='Enter balance' name='balance' className='form-input' id="" 
          value={data.purchase} onChange={e => setData({...data, purchase: e.target.value})}
        />
        <input type="submit"  className='btn' value='Update'/>
      </form>
    </div>

    </div>
  )
}

export default Edit