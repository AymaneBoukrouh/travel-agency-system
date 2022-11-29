import React from 'react';
import ReactDOM from 'react-dom/client';

import  { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import HelloWorld from './views/HelloWorld';
import Register from './views/Register';
import Login from './views/Login';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'hello_world',
        element: <HelloWorld />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
