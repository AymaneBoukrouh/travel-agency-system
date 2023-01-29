import { useState, useRef, useEffect } from 'react';

import { Card } from '@mui/material';
import { People, Visibility, Tour, Apartment, Bookmark } from '@mui/icons-material';

import DashboardExpenses from '@/components/dashboard/ExpensesChart';
import DashboardVisits from '@/components/dashboard/VisitsChart';
import DashboardStatCard from '@/components/dashboard/StatCard';
import DashboardTopSavedTrips from '@/components/dashboard/TopSavedTrips';
import DashboardRecentBookings from '@/components/dashboard/RecentBookings';
import DashboardMessages from '@/components/dashboard/Messages';
import DashboardReports from '@/components/dashboard/Reports';

const Main = () => {
  const expensesRef = useRef(null);

  const [users, setUsers] = useState<int>(0);
  const [trips, setTrips] = useState<int>(0);
  const [offices, setOffices] = useState<int>(0);
  const [bookings, setBookings] = useState<int>(0);
  const [clicks, setClicks] = useState<int>(0);
  const [completed_trips, setCompletedTrips] = useState<int>(0);
  const [revenues, setRevenues] = useState<int>(0);
  const [morocco_revenues, setMoroccoRevenues] = useState<int>(0);
  const [abroad_revenues, setAbroadRevenues] = useState<int>(0);
  const [trip_clicks, setTripClicks] = useState<int>(0);

  fetch('http://localhost:8000/api/dashboard')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data.users);
      setTrips(data.trips);
      setOffices(data.offices);
      setBookings(data.bookings);
      setClicks(data.clicks);
      setCompletedTrips(data.completed_trips);
      setRevenues(data.revenues);
      setMoroccoRevenues(data.morocco_revenues);
      setAbroadRevenues(data.abroad_revenues);
      setTripClicks(data.trip_clicks);
    });


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
          <DashboardStatCard value={trips} name="Trips" comment="in total" Icon={Tour} iconColor="red"  />
        </div>
        <div className="col-2">
          <DashboardStatCard value={completed_trips} name="Completed" comment="this total" Icon={Tour} iconColor="green" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={bookings} name="Bookings" comment="in total" Icon={Bookmark} iconColor="blue" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={users} name="Users" comment="in total" Icon={People} iconColor="orange" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={trip_clicks} name="Clicks" comment="in total" Icon={Visibility} iconColor="gray" />
        </div>
        <div className="col-2">
          <DashboardStatCard value={offices} name="Offices" comment="in total" Icon={Apartment} iconColor="blue" />
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          <Card className="p-3 bg-white text-dark" elevation={0} ref={expensesRef}>
            <DashboardExpenses revenues={revenues} morocco_revenues={morocco_revenues} abroad_revenues={abroad_revenues} />
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
            <DashboardMessages />
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-2">
          <Card className="p-3 bg-white text-dark h-100" elevation={0}>
            <DashboardReports />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Main;
