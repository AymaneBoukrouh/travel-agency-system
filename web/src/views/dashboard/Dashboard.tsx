import { useEffect } from 'react';

import { Outlet } from 'react-router-dom'

import { useTopBar } from '@/hooks/useTopBar';

import DashboardSideBar from '@/components/DashboardSideBar';

const Dashboard = () => {
  const { setTopBarBackgroundColor } = useTopBar();

  useEffect(() => {
    setTopBarBackgroundColor('white');
  }, [])

  return (
    <div className="container-fluid d-flex h-100 p-0 bg-light">
      <DashboardSideBar />
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;
