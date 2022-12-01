import React from 'react';
import ReactDOM from 'react-dom/client';

import  { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import './index.css';
import './i18n';
import App from './App';
import HelloWorld from './views/HelloWorld';

import Auth from './views/Auth';

import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';

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
        element: <Auth />,
        children: [
          {
            path: 'login',
            element: <LoginForm />
          },
          {
            path: 'register',
            element: <RegisterForm />
          }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
