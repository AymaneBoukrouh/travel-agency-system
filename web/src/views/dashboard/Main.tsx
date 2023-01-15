import { useRef, useEffect } from 'react';

import { Card } from '@mui/material';
import { People, Visibility, Tour, Apartment, Bookmark } from '@mui/icons-material';

import DashboardExpenses from '@/components/dashboard/ExpensesChart';
import DashboardVisits from '@/components/dashboard/VisitsChart';
import DashboardStatCard from '@/components/dashboard/StatCard';
import DashboardTopSavedTrips from '@/components/dashboard/TopSavedTrips';
import DashboardRecentBookings from '@/components/dashboard/RecentBookings';

const Main = () => {
  const expensesRef = useRef(null);

  useEffect(() => {
    const expensesHeight = expensesRef.current.clientHeight;
    const recentBookingsElement = document.querySelector('.recent-bookings');
    const topSavedTripsElement = document.querySelector('.top-saved-trips');
    recentBookingsElement.style.height = `${expensesHeight}px`;
    topSavedTripsElement.style.height = `${expensesHeight}px`;
  }, []);

  return (
    <div className="container-fluid">
      <div className="row hidescroll rounded-3 g-3" style={{ height: '90vh', overflow: 'scroll' }}>
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
        <div className="col-12 col-md-6 col-lg-5">
          <Card className="p-3 bg-white text-dark" elevation={0} ref={expensesRef}>
            <DashboardExpenses />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Card className="p-3 bg-white text-dark recent-bookings" elevation={0}>
            <DashboardRecentBookings />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card className="p-3 bg-white text-dark top-saved-trips" elevation={0}>
            <DashboardTopSavedTrips />
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
      </div>
    </div>
  )
}

export default Main;
