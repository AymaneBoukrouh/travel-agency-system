import { Outlet } from 'react-router-dom'

import DashboardSideBar from '../../components/DashboardSideBar';

const Dashboard = () => {
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
