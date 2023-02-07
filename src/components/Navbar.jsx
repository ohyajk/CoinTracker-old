import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between items-center' >
       <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'invisible' : 'visible'
            }
          >
           <i class="fa-solid fa-left-long"></i>
          </NavLink>
        <h2 className='text-2xl md:text-4xl font-black'>Coin<span className='text-violet-400'>Tracker</span></h2>
        <div className='flex justify-center items-center gap-2'>
        <i class="fa-solid fa-microphone"></i>
        <i class="fa-solid fa-gear"></i>
        </div>
    </div>
  )
};

export default Navbar;
