import { useEffect } from 'react';

import { Outlet } from 'react-router-dom'

import { useTopBar } from '@/hooks/useTopBar';

import DashboardSideBar from '@/components/DashboardSideBar';

const Dashboard = () => {
  const dashboardColor = '#403294';


  const { setTopBarBackgroundColor } = useTopBar();

  useEffect(() => {
    setTopBarBackgroundColor(dashboardColor);
  }, [])

  return (
    <div className="container-fluid d-flex h-100 p-0 bg-light">
      <DashboardSideBar backgroundColor={dashboardColor} />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;
