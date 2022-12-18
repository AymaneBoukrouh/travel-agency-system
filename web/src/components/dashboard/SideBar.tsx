import { useTheme } from '@mui/material';
import { Dashboard, People, Settings, Tour, Apartment, Extension } from '@mui/icons-material';

import DashboardNavLink from '@/components/dashboard/NavLink';

interface SideBarProps {
  backgroundColor: string;
}

const SideBar = (props: SideBarProps) => {
  return (
    <div className="m-3" style={{ backgroundColor: props.backgroundColor, borderRadius: '20px' }}>
      <div className="d-flex flex-column gap-3 py-5">
        <DashboardNavLink to="/dashboard/main" Icon={Dashboard} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/users" Icon={People} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/offices" Icon={Apartment} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/trips" Icon={Tour} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/packages" Icon={Extension} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/settings" Icon={Settings} bg={props.backgroundColor} />
      </div>
    </div>
  )
}

export default SideBar;
