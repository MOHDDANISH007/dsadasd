import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // Define handleClick function
  const handleClick = () => {
    console.log('App button clicked!');
  };
  const bodyClick = () => {
    console.log('Body button clicked!');
  };  

  return (
    <div>
      <h1>Header</h1>

      <div className='flex space-x-4 mt-4 p-4'>
        <NavLink to='/app'>
          <button
            onClick={handleClick}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            App
          </button>
        </NavLink>

        <NavLink to='/loader'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Loader
          </button>
        </NavLink>

        <NavLink to='/body'>
          <button onClick={bodyClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            body
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
