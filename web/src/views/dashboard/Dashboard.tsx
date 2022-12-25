import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/hooks/useAuthContext';

import { useTopBar } from '@/hooks/useTopBar';

import DashboardSideBar from '@/components/dashboard/SideBar';

const Dashboard = () => {
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  const dashboardColor = '#403294';

  const { setTopBarBackgroundColor } = useTopBar();

  useEffect(() => {
    setTopBarBackgroundColor(dashboardColor);
  }, [])

  if (!isAdmin) {
    navigate('/trips');
    return null;
  }

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
