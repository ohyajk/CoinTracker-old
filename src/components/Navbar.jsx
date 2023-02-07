import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="flex py-4 px-8 justify-between items-center">
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? 'invisible' : 'visible')}
    >
      <i className="fa-solid fa-left-long" />
    </NavLink>
    <h2 className="text-2xl md:text-4xl font-black">
      Coin
      <span className="text-violet-400">Tracker</span>
    </h2>
    <div className="flex justify-center items-center gap-2">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

export default Navbar;
