import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LoaderState = () => {
    const apiData = useLoaderData();
    console.log(apiData);  // This should log { recipes: Array(6) }
    const recipes = apiData.recipes;  // Access the recipes array
    
    return (
        <div className='m-5'>
            <h1 className='text-8xl'>LoaderState</h1>

            <ul>
                {recipes.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default LoaderState;
