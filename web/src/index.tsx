import React from 'react';
import ReactDOM from 'react-dom/client';
import  { RouterProvider } from 'react-router-dom';

import router from '@/routes';
import { AuthProvider } from '@/context/AuthContext';

// internationalization
import './i18n';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// custom styles
import './index.css';

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
