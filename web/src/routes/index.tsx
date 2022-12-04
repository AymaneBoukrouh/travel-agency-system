import  { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HelloWorld from '../views/HelloWorld';

import Auth from '../views/Auth';
import Trips from '../views/Trips';

import Dashboard from '../views/dashboard/Dashboard';
import DashboardStats from '../views/dashboard/DashboardStats';
import DashboardUsers from '../views/dashboard/DashboardUsers';
import DashboardSettings from '../views/dashboard/DashboardSettings';

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
        path: 'trips',
        element: <Trips />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'stats',
            element: <DashboardStats />
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
      }
    ]
  }
]);

export default router;
