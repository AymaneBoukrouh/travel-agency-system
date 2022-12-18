import React from 'react';
import ReactDOM from 'react-dom/client';
import  { RouterProvider } from 'react-router-dom';

import router from '@/routes';
import { AuthProvider } from '@/context/AuthContext';
import { TopBarProvider } from '@/context/TopBarContext';

// internationalization
import './i18n';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// custom styles
import './index.css';

// datatables
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/js/dataTables.dataTables';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TopBarProvider>
        <RouterProvider router={router} />
      </TopBarProvider>
    </AuthProvider>
  </React.StrictMode>
);
