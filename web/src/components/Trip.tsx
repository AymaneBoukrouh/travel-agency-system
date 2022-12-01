import './Trip.css';

interface TripProps {
  id: number;
  name: string;
  image: string;
}

const Trip = (trip: TripProps) => {
  return (
    <div>
      <div className="trip-img-wrapper rounded-3 mb-3 w-100 ratio ratio-1x1">
        <img className="trip-img img-fluid ratio ratio-1x1" src={trip.image} alt="Trip" />
      </div>
      <h3>{trip.name}</h3>
      <div>Starting from $430</div>
    </div>
  )
};

export default Trip;
