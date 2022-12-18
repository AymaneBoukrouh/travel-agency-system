import DashboardMain from '@/views/dashboard/Main';
import DashboardUsers from '@/views/dashboard/Users';
import DashboardOffices from '@/views/dashboard/Offices';
import DashboardTrips from '@/views/dashboard/Trips';
import DashboardNewTrip from '@/views/dashboard/NewTrip';
import DashboardPackages from '@/views/dashboard/Packages';
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
    element: <DashboardOffices />
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
    path: 'packages',
    element: <DashboardPackages />
  },
  {
    path: 'settings',
    element: <DashboardSettings />
  }
];

export default dashboardRoutes;
