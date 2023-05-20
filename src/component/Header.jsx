import React from 'react'

function Header() {
  return (
    <div>
      <div className='container flex justify-between items-center'>
          <p className='font-bold text-lg'>
            Honeyland Cooperative Society
          </p>
        <div className='nav-menu hidden md:block'>
          <ul className='flex'>
            <li className='nav-lin'>Home</li>
            <li className='nav-link'>About</li>
            <li className='nav-link'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header