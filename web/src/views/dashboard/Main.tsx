import { Card } from '@mui/material';
import { People, Visibility, Tour, Apartment } from '@mui/icons-material';

import DashboardExpenses from '@/components/dashboard/ExpensesChart';
import DashboardVisits from '@/components/dashboard/VisitsChart';
import DashboardStatItem from '@/components/dashboard/StatCard';

const Main = () => {

  return (
    <div className="container-fluid">
      <div className="row g-3">
        <div className="col-2">
          <DashboardStatItem value={520} name="Users" comment="in total" Icon={People} iconColor="orange" />
        </div>
        <div className="col-2">
          <DashboardStatItem value={422} name="Visits" comment="this month" Icon={Visibility} iconColor="gray" />
        </div>
        <div className="col-2">
          <DashboardStatItem value={27} name="Trips" comment="in total" Icon={Tour} iconColor="red"  />
        </div>
        <div className="col-2">
          <Card className="text-dark px-3 py-2 bg-white" elevation={0}>
            <h1 className="fw-bold mb-0">3</h1>
            <div>Active</div>
          </Card>
        </div>
        <div className="col-2">
          <DashboardStatItem value={42} name="Completed" comment="this month" Icon={Tour} iconColor="green" />
        </div>
        <div className="col-2">
          <DashboardStatItem value={3} name="Offices" comment="in total" Icon={Apartment} iconColor="blue" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card className="p-3 bg-white text-dark" elevation={0}>
            <DashboardExpenses />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Card className="p-3 bg-white text-dark h-100" elevation={0}>
            <DashboardVisits />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Main;
