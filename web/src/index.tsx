import React from 'react';
import ReactDOM from 'react-dom/client';

import router from './routes';
import  { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import './index.css';
import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

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
