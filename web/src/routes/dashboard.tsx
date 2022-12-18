import DashboardMain from '@/views/dashboard/Main';
import DashboardUsers from '@/views/dashboard/Users';
import DashboardOffices from '@/views/dashboard/Offices';
import DashboardNewOffice from '@/views/dashboard/NewOffice';
import DashboardTrips from '@/views/dashboard/Trips';
import DashboardNewTrip from '@/views/dashboard/NewTrip';
import DashboardSettings from '@/views/dashboard/Settings';

const dashboardRoutes = [
  {
    path: '',
    to: 'main'    
  },
  {
    path: 'main',
    element: <DashboardMain />
  },
  {
    path: 'users',
    element: <DashboardUsers />
  },
  {
    path: 'offices',
    children: [
      {
        path: '',
        element: <DashboardOffices />
      },
      {
        path: 'new',
        element: <DashboardNewOffice />
      }
    ]
  },
  {
    path: 'trips',
    children: [
      {
        path: '',
        element: <DashboardTrips />
      },
      {
        path: 'new',
        element: <DashboardNewTrip />
      }
    ]
  },
  {
    path: 'settings',
    element: <DashboardSettings />
  }
];

export default dashboardRoutes;
