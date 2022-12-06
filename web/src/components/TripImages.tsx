import { Images } from 'react-bootstrap-icons';

const TripImages = () => {
  const handleShowPicturesModal = () => {
    alert('ok');
  };

  return (
    <div className="container-fluid trip-imgs">
      <div className="row">
        <div className="col-6 p-0 pe-2">
          <div className="overflow-hidden rounded-3 pointer-finger" onClick={handleShowPicturesModal}>
            <img className="img-fluid" src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg" alt="trip" />
          </div>
        </div>
        <div className="col-6 p-0 ps-2">
          <div className="d-flex flex-column">
            <div className="row mb-3">
              <div className="col-6">
                <div className="overflow-hidden rounded-3 pointer-finger" onClick={handleShowPicturesModal}>
                  <img className="img-fluid" src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg" alt="trip" />
                </div>
              </div>
              <div className="col-6">
                <div className="overflow-hidden rounded-3 pointer-finger" onClick={handleShowPicturesModal}>
                  <img className="img-fluid" src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg" alt="trip" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="overflow-hidden rounded-3 pointer-finger" onClick={handleShowPicturesModal}>
                  <img className="img-fluid" src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg" alt="trip" />
                </div>
              </div>
              <div className="col-6">
                <div className="position-relative overflow-hidden rounded-3 pointer-finger" onClick={handleShowPicturesModal}>
                  <img className="img-fluid" src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg" alt="trip" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, .7' }}>
                    <div className="mb-2"><Images size={26} /></div>
                    <div>30+ pictures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripImages;
