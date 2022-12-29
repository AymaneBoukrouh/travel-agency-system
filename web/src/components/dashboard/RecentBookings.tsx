import { useRef, useEffect } from 'react';

const RecentBookings = () => {
  const bookings = [
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Cancelled',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Pending',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Paid',
      price: 100
    },
    {
      trip: 'Paris',
      user: 'John Doe',
      date: '2021-01-01',
      status: 'Cancelled',
      price: 100
    }
  ];

  const recentBookingsRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const recentBookingsHeight = recentBookingsRef.current.clientHeight;
    const headingHeight = recentBookingsRef.current.querySelector('h3').clientHeight;
    tableRef.current.style.height = `${recentBookingsHeight - headingHeight}px`;
  }, [recentBookingsRef]);

  return (
    <div ref={recentBookingsRef} className="h-100 overflow-hidden">
      <h3 className="mb-3">Recent Booking Activity</h3>
      <div ref={tableRef} className="hidescroll" style={{ overflow: 'scroll' }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Trip</th>
              <th scope="col">User</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} onClick={() => console.log('clicked')} style={{ cursor: 'pointer' }}>
                <td>{booking.trip}</td>
                <td>{booking.user}</td>
                <td>{booking.date}</td>
                <td className="text-center">
                  {booking.status === 'Paid' && <span className="alert alert-success p-1 rounded w-100">{booking.status}</span>}
                  {booking.status === 'Pending' && <span className="alert alert-warning p-1 rounded w-100">{booking.status}</span>}
                  {booking.status === 'Cancelled' && <span className="alert alert-danger p-1 rounded w-100">{booking.status}</span>}
                </td>
                <td className="text-success">${booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentBookings;
