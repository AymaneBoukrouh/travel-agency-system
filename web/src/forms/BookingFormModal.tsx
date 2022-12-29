import { useState, FormEvent } from 'react';

import { FormControl, FormLabel, TextField, Button, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material';

import { Modal } from 'react-bootstrap';

import { useBooking } from '@/hooks/useBooking';

import { Trip } from '@/types/Trip';


interface BookingFormModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  trip: Trip;
}

const BookingFormModal = ({ showModal, handleCloseModal, trip }: BookingFormModalProps) => {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  const { createBooking } = useBooking();

  const handleCreateBooking = async () => {
    const newBooking = await createBooking({ number_of_people: numberOfPeople, trip_id: trip.id });

    if (newBooking) {
      handleCloseModal();
      // TODO: show success or error message
    }

    else {
      alert('An error occured.');
    }
  }

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Book Now!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl variant="standard" fullWidth>
          <div className="row mb-3 px-3">
            <div className="col">
              <TextField
                select
                required
                label = "Number of People"
                variant = "standard"
                fullWidth
                value = { numberOfPeople }
                onChange = { (e) => setNumberOfPeople(e.target.value) }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <MenuItem key={number} value={number}>
                    {number}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </FormControl>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" color="primary" className="me-2" onClick={handleCreateBooking}>Confirm</Button> {/* TODO: should redirect to pay page or similar */}
        <Button variant="outlined" color="error" onClick={handleCloseModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BookingFormModal;
