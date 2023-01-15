import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TopSavedTrips = () => {
  const bookings = [
    {
      trip_id: 493,
      number_of_saves: 647,
      last_saved: '2 minutes ago'
    },
    {
      trip_id: 233,
      number_of_saves: 592,
      last_saved: '7 minutes ago'
    },
    {
      trip_id: 493,
      number_of_saves: 563,
      last_saved: '32 minutes ago'
    },
    {
      trip_id: 193,
      number_of_saves: 520, 
      last_saved: '55 minutes ago'
    },
    {
      trip_id: 323,
      number_of_saves: 500,
      last_saved: '1 hour ago'
    },
    {
      trip_id: 493,
      number_of_saves: 647,
      last_saved: '2 minutes ago'
    },
    {
      trip_id: 233,
      number_of_saves: 592,
      last_saved: '7 minutes ago'
    },
    {
      trip_id: 493,
      number_of_saves: 563,
      last_saved: '32 minutes ago'
    },
    {
      trip_id: 193,
      number_of_saves: 520, 
      last_saved: '55 minutes ago'
    },
    {
      trip_id: 323,
      number_of_saves: 500,
      last_saved: '1 hour ago'
    }
  ];

  const topSavedTripsRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const topSavedTripsHeight = topSavedTripsRef.current.clientHeight;
    const headingHeight = topSavedTripsRef.current.querySelector('h3').clientHeight;
    tableRef.current.style.height = `${topSavedTripsHeight - headingHeight}px`;
  }, [topSavedTripsRef]);

  return (
    <div ref={topSavedTripsRef} className="h-100 overflow-hidden">
      <h3 className="mb-3">Top Saved Trips</h3>
      <div ref={tableRef} className="hidescroll" style={{ overflow: 'scroll' }}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Trip ID</th>
              <th scope="col">Number of Saves</th>
              <th scope="col">Last Saved</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} onClick={() => console.log('clicked')} style={{ cursor: 'pointer' }}>
                <td className="text-center"><NavLink to={`/trips/${booking.trip_id}`} className="text-decoration-none">{booking.trip_id}</NavLink></td>
                <td className="text-center">{booking.number_of_saves}</td>
                <td className="text-center">{booking.last_saved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSavedTrips;