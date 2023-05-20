import React from 'react'
import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <div className='container flex flex-col justify-center items-center md:flex-row h-[500px] 
    w-[80hw] m-auto'>
      <div className='bg-black text-white text-xs md:text-base w-[80hw]  h-fit md:h-[250px] text-center p-4 rounded-l-lg'>
        <p className='heading'>Register </p>
        <p>
          If you are a member click <Link to = "/login">here</Link> to login.
          <p><strong>Note:</strong>The sum of N1,000 is to be paid to the cooperative account.</p>
        </p>
        
      </div>
      <div className=' w-[100%] h-fit md:h-[250px]'>
        <form className='flex flex-col w-[80hw] h-[250px] justify-center items-center gap-4'>
         <input type='email' placeholder='Enter your email' className='form-input' />
         <input type="password" placeholder='Enter your password' className='form-input' />
         <input type="submit" value='Login' className='btn' />
        </form>
      </div>
    </div>
  )
}

export default SignUpPage