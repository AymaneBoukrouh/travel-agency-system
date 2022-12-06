import { useTheme } from '@mui/material';
import { Dashboard, People, Settings } from '@mui/icons-material';

import DashboardNavLink from '@/components/DashboardNavLink';

interface DashboardSideBarProps {
  backgroundColor: string;
}

const DashboardSideBar = (props: DashboardSideBarProps) => {
  return (
    <div className="m-3" style={{ backgroundColor: props.backgroundColor, borderRadius: '20px' }}>
      <div className="d-flex flex-column gap-3 py-5">
        <DashboardNavLink to="/dashboard" Icon={Dashboard} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/users" Icon={People} bg={props.backgroundColor} />
        <DashboardNavLink to="/dashboard/settings" Icon={Settings} bg={props.backgroundColor} />
      </div>
    </div>
  )
}

export default DashboardSideBar;
