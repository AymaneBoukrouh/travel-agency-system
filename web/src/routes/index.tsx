import  { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HelloWorld from '../views/HelloWorld';

import Auth from '../views/Auth';

import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';


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

export default router;
