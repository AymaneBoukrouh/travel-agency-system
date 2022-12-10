import DashboardMain from '@/views/dashboard/Main';
import DashboardUsers from '@/views/dashboard/Users';
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
