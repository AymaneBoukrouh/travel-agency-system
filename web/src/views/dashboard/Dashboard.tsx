import { Outlet } from 'react-router-dom'

import DashboardSideBar from '../../components/DashboardSideBar';

const Dashboard = () => {
  return (
    <div className="container-fluid d-flex h-100 p-0">
      <DashboardSideBar />
      <Outlet />
    </div>
  )
}

export default Dashboard;
