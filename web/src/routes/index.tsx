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
import DashboardMain from '@/views/dashboard/Main';
import DashboardUsers from '@/views/dashboard/Users';
import DashboardSettings from '@/views/dashboard/Settings';

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
        children: [
          {
            path: '',
            element: <DashboardMain />
          },
          {
            path: 'users',
            element: <DashboardUsers />
          },
          {
            path: 'settings',
            element: <DashboardSettings />
          }
        ]
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
