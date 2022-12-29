import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

import { useTheme, Button, Checkbox } from '@mui/material';

import { SuitHeart, SuitHeartFill } from 'react-bootstrap-icons';

import { useTopBar } from '@/hooks/useTopBar';
import TripImages from '@/components/TripImages';

import BookingFormModal from '@/forms/BookingFormModal';

import '@/views/Trip.scss';

const Trip = () => {
  const params = useParams();
  const theme = useTheme();

  const { setTopBarBackgroundColor } = useTopBar();

  // modal
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => setShowModal(false);


  useEffect(() => {
    setTopBarBackgroundColor(theme.palette.primary.main);
  }, []);

  return (
    <div className="d-flex flex-column bg-light h-100" style={{ padding: '30px 15%' }}>
      <div className="text-light">
        <h1 className="mb-3">Trip {params.id}</h1>
        <div className="mb-3">
          <TripImages />
        </div>
        <div className="d-flex justify-content-between rounded-3 bg-white text-dark px-3 py-2 w-100 mb-3">
          <div className="d-flex gap-5">
            <div>
              <div>Days</div>
              <h3>7</h3>
            </div>
            <div>
              <div>Country</div>
              <h3>Morocco</h3>
            </div>
            <div>
              <div>Departure</div>
              <h3>2021-12-12</h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <div>FROM</div>
              <div className="d-flex">
                <h3 className="me-2">$430</h3>
                <div>USD</div>
              </div>
            </div>
            <div className="me-2">
              <Button onClick={() => setShowModal(true)} variant="contained" color="primary">Book Now</Button>
              <BookingFormModal showModal={showModal} handleCloseModal={handleCloseModal} trip={{id: params.id} as Trip} /> {/* TODO: fix trip params */}
            </div>
            <div>
              <Checkbox icon={<SuitHeart size={30} />} checkedIcon={<SuitHeartFill size={30} />} className="text-dark" />
            </div>
          </div>
        </div>
        <div className="text-dark">
          <h2 className="border-bottom mb-3">Locations/Landmarks</h2>
          <ul>
            <li>Eiffel Tower</li>
            <li>Notre Dame</li>
            <li>Champs Elysees</li>
            <li>Disneyland</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Trip;
