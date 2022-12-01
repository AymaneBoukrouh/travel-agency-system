import Trip from './Trip';

const Trips = () => {
  const trips = [
    {
      id: 1,
      name: 'Trip 1',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg'
    },
    {
      id: 2,
      name: 'Trip 2',
      image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg'
    },
    {
      id: 3,
      name: 'Trip 3',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg'
    },
    {
      id: 4,
      name: 'Trip 4',
      image: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg'
    }
  ];

  return (
    <div className="container-fluid" style={{ color: 'white' }}>
      <div className="h3 mb-3">Trips</div>
      <div className="row g-3">
      {trips.map((trip) => (
        <div className="col-3" key={trip.id}>
          <Trip id={trip.id} name={trip.name} image={trip.image} />
        </div>
      ))}
    </div>
  </div>
  )
};

export default Trips;
