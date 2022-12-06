import Trip from '@/components/Trip';

interface TripsProps {
  title: string;
}

const Trips = (props: TripsProps) => {
  const trips = [
    {
      id: 1,
      name: 'Trip 1',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
      price: 430,
      office: 'Rabat',
      nights: 3,
      cities: ['Paris'],
      places: 20,
      left: 3
    },
    {
      id: 2,
      name: 'Trip 2',
      image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg',
      price: 200,
      office: 'Casablanca',
      nights: 2,
      cities: ['London'],
      places: 20,
      left: 5
    },
    {
      id: 3,
      name: 'Trip 3',
      image: 'https://images.pexels.com/photos/4913206/pexels-photo-4913206.jpeg',
      price: 350,
      office: 'Tangier',
      nights: 4,
      cities: ['Sevilla', 'Madrid'],
      places: 30,
      left: 10
    },
    {
      id: 4,
      name: 'Trip 4',
      image: 'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg',
      price: 799,
      office: 'Tangier',
      nights: 7,
      cities: ['Sevilla', 'Madrid', 'Barcelona'],
      places: 30,
      left: 10
    }
  ];

  return (
    <div className="container-fluid" style={{ color: 'white' }}>
      <div className="h3 mb-3">{props.title}</div>
      <div className="row g-3">
      {trips.map((trip) => (
        <div className="col-3" key={trip.id}>
          <Trip {...trip} />
        </div>
      ))}
    </div>
  </div>
  )
};

export default Trips;
