import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayout from './Applayout.jsx';
import Loader from './LoaderState.jsx';
import Body from './Body.jsx';
import { fetchData } from './FetchData.jsx'; // Import the named fetchData function
import Error from './Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: 'app',
        element: <App />,
      },
      {
        path: 'loader',
        element: <Loader />,
        loader: fetchData, // Pass fetchData as the loader
      },
      {
        path: 'body',
        element: <Body />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
