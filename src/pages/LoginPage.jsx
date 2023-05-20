import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className='container flex flex-col justify-center items-center md:flex-row h-[500px] 
    w-[80hw] m-auto'>
      <div className='bg-black text-white text-xs md:text-base w-[80hw]  h-fit md:h-[250px] text-center p-4 rounded-l-lg'>
        <p className='heading'>Member Login </p>
        <p>If you have forgotten your password, click <a href=''>Here</a> to reset it.</p>
        <p>Only login with the Email address and password sent to you.
          To become a member kindly <Link to = "/register">Register</Link>.
          <p><strong>Note:</strong>The sum of N1,000 is to be paid to the cooperative account.</p>
        </p>
        
      </div>
      <div className=' w-[100%] h-fit md:h-[250px]'>
        <form className='flex flex-col w-[80hw] h-[250px] justify-center items-center gap-4'>
         <input type='email' placeholder='Enter your email' className='form-input' />
         <input type="password" placeholder='Enter your password' className='form-input' />
         <input type="submit" value='Login' className='btn' />
         <p className='text-center text-red-700'>Login as an <Link to = '/admin'>Admin</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage