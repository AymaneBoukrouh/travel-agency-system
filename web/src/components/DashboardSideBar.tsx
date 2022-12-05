import { NavLink } from 'react-router-dom'

import { useTheme } from '@mui/material';

import { Dashboard, People, Settings } from '@mui/icons-material';

import DashboardNavLink from './DashboardNavLink';

const DashboardSideBar = () => {
  const theme = useTheme();

  return (
    <div className="m-3" style={{ backgroundColor: theme.palette.primary.main, borderRadius: '20px' }}>
      <div className="d-flex flex-column gap-3 py-5">
        <DashboardNavLink to="/dashboard" Icon={Dashboard} />
        <DashboardNavLink to="/dashboard/users" Icon={People} />
        <DashboardNavLink to="/dashboard/settings" Icon={Settings} />
      </div>
    </div>
  )
}

export default DashboardSideBar;
