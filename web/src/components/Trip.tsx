import { NavLink } from 'react-router-dom';

import { AirplaneFill, TrainFrontFill, BusFrontFill, SuitHeart, SuitHeartFill, Building } from 'react-bootstrap-icons';

import { Button, Checkbox } from '@mui/material';

import '@/components/Trip.css';

interface TripProps {
  id: number;
  name: string;
  image: string;
  price: number;
  office: string;
  nights: number;
  cities: string[];
  places: number;
  left: number;
}

const Trip = (trip: TripProps) => {
  const sendTripClick = () => {
    fetch('http://localhost:8000/api/trip_clicks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip_id: trip.id,
        user_id: 1
      })
    })
  }

  return (
    <div className="trip-wrapper">
      <div className="trip-img-wrapper position-relative rounded-3 mb-3 w-100 ratio ratio-1x1">
        <img className="trip-img img-fluid ratio ratio-1x1" src={trip.image} alt="Trip" />
        <div className="trip-img-box d-flex flex-column position-absolute top-100 w-100 h-100 rounded-3 p-3">
          <div className="position-absolute top-0 end-0 m-3 rounded-3">
            <Checkbox icon={<SuitHeart size={30} />} checkedIcon={<SuitHeartFill size={30} />} color="secondary" />
          </div>
          <div className="d-flex mb-3">
            <Building size={30} className="text-white me-2" />
            <h4>{trip.office}</h4>
          </div>
          <div>
            {trip.nights} nights
          </div>
          <div>
            {trip.cities.length} {trip.cities.length > 1 ? 'cities' : 'city'}
          </div>
          <div>
           {trip.places} places ({trip.left} left)
          </div>
          <div className="d-flex justify-content-center">
            <NavLink to={`/trips/${trip.id}`} className="text-decoration-none mt-3" >
              <Button variant="contained" className="bg-light text-dark" onClick={sendTripClick}>Details</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between text-dark px-2">
        <div className="d-flex mb-2">
          <div className="me-2">
            <AirplaneFill className="rotate-45" />
          </div>
          <div className="me-2">
            <TrainFrontFill />
          </div>
          <div className="me-2">
            <BusFrontFill />
          </div>
        </div>
        <div>from <b>${trip.price}</b></div>
      </div>
    </div>
  )
};

export default Trip;
