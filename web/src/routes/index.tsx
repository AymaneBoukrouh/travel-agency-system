import  { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Error from '@/views/Error';
import HelloWorld from '@/views/HelloWorld';
import Trips from '@/views/Trips';
import Trip from '@/views/Trip';

import Auth from '@/views/Auth';
import RegisterForm from '@/forms/RegisterForm';
import LoginForm from '@/forms/LoginForm';


import Dashboard from '@/views/dashboard/Dashboard';
import dashboardRoutes from '@/routes/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'hello_world',
        element: <HelloWorld />
      },
      {
        path: 'trips',
        element: <Trips />
      },
      {
        path: 'trips/:id',
        element: <Trip />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: dashboardRoutes
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
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

export default router;
