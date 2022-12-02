import './Trip.css';

interface TripProps {
  id: number;
  name: string;
  image: string;
}

const Trip = (trip: TripProps) => {
  return (
    <div className="trip-wrapper">
      <div className="trip-img-wrapper position-relative rounded-3 mb-3 w-100 ratio ratio-1x1">
        <img className="trip-img img-fluid ratio ratio-1x1" src={trip.image} alt="Trip" />
        <div className="trip-img-wrapper-box d-flex justify-content-center align-items-center position-absolute top-100 w-100 h-100 rounded-3">
          <div className="h2">
            {trip.name}
          </div>
        </div>
      </div>
      <h3>{trip.name}</h3>
      <div>Starting from $430</div>
    </div>
  )
};

export default Trip;
