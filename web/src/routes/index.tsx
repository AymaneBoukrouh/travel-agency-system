import  { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HelloWorld from '../views/HelloWorld';

import Auth from '../views/Auth';
import Home from '../views/Home';

import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';


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
        path: 'home',
        element: <Home />
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

export default router;
