import { Outlet } from 'react-router-dom'

import DashboardSideBar from '../../components/DashboardSideBar';

const Dashboard = () => {
  return (
    <div className="container-fluid d-flex h-100 p-0">
      <DashboardSideBar />
      <Outlet />
      {/*<div className="flex-grow-1 p-3">
        <h1>Dashboard</h1>
      </div>*/}
    </div>
  )
}

export default Dashboard;
