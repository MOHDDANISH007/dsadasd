import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    const handleClick = ()=>{
        navigate(-1);
    }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mt-5 text-8xl'>Error</h1>
      <p className='mt-5 text-red-500'>{error.message}</p>
        <button onClick={handleClick} className=' mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Go Back</button>
    </div>
  )
}

export default Error
