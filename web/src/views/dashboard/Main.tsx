import { Card } from '@mui/material';
import { People, Visibility, Tour, Apartment, Bookmark } from '@mui/icons-material';

import DashboardExpenses from '@/components/dashboard/ExpensesChart';
import DashboardVisits from '@/components/dashboard/VisitsChart';
import DashboardStatCard from '@/components/dashboard/StatCard';
import DashboardTopSavedTrips from '@/components/dashboard/TopSavedTrips';

const Main = () => {

  return (
    <div className="container-fluid">
      <div className="row g-3">
        <div className="col-2">
          <DashboardStatCard value={27} name="Trips" comment="in total" Icon={Tour} iconColor="red"  />
        </div>
        <div className="col-2">
          <DashboardStatCard value={573} name="Bookings" comment="in total" Icon={Bookmark} iconColor="blue" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={520} name="Users" comment="in total" Icon={People} iconColor="orange" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={422} name="Visits" comment="this month" Icon={Visibility} iconColor="gray" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={42} name="Completed" comment="this month" Icon={Tour} iconColor="green" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={3} name="Offices" comment="in total" Icon={Apartment} iconColor="blue" />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Card className="p-3 bg-white text-dark" elevation={0}>
            <DashboardExpenses />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Card className="p-3 bg-white text-dark h-100" elevation={0}>
            <DashboardVisits />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card className="p-3 bg-white text-dark h-100" elevation={0}>
            <DashboardTopSavedTrips />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card className="p-3 bg-white text-dark h-100" elevation={0}>
            <DashboardTopSavedTrips />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card className="p-3 bg-white text-dark h-100" elevation={0}>
            <DashboardTopSavedTrips />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Main;
