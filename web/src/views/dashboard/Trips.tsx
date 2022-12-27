import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useTheme, Button, FormControl, TextField, TextareaAutosize } from '@mui/material';

import DashboardTable from '@/components/dashboard/Table';
import { Trip } from '@/types/Trip';
import { useTrip } from '@/hooks/useTrip';


const Trips = () => {
  const theme = useTheme();

  // trip
  const [trips, setTrips] = useState<Trip[]>([]);
  const [tripDetails, setTripDetails] = useState<Trip>({} as Trip);
  const { getTrips, getTrip, createTrip, updateTrip, deleteTrip, error } = useTrip();

  // trip handlers
  const checkTripDetails = () => { // check that all fields are filled out
    if (!tripDetails.departure_date, !tripDetails.arrival_date, !tripDetails.destination,
    !tripDetails.price, !tripDetails.transport_mode, !tripDetails.office_id) {
      setTripModalError('Please fill out all fields.');
      return false;
    }
  }

  const handleCreateTrip = async () => {
    checkTripDetails(); // check that all fields are filled out
    const newTrip = await createTrip(tripDetails);

    if (newTrip) {
      setTrips([...trips, newTrip]);
      handleCloseTripModal();
      setTripModalError(null);
    }

    else {
      setTripModalError('Trip already exists.');
    }
  }

  const handleUpdateTrip = async () => {
    checkTripDetails(); // check that all fields are filled out
    const updatedTrip = await updateTrip(tripDetails);

    if (updatedTrip) {
      setTrips(trips.map(trip => trip.id === tripDetails.id ? tripDetails : trip));
      handleCloseTripModal();
      setTripModalError(null);
    }

    else {
      setTripModalError('An error occured.');
    }
  };

  const handleDeleteTrip = async () => {
    const deletedTrip = await deleteTrip(tripDetails.id);

    if (deletedTrip) {
      setTrips(trips.filter(trip => trip.id !== tripDetails.id ));
      handleCloseDeleteTripModal();
      setDeleteTripModalError(null);
    }

    else {
      setDeleteTripModalError('An error occurred.');
    }
  };

  // add/edit modal
  const [isAddModal, setIsAddModal] = useState<boolean>(true); // true = add, false = edit
  const [showTripModal, setShowTripModal] = useState<boolean>(false);
  const [tripModalError, setTripModalError] = useState<string | null>(null);

  const handleOpenAddTripModal = () => {
    setTripDetails({} as Trip);
    setIsAddModal(true);
    setShowTripModal(true);
  }

  const handleOpenEditTripModal = (id: number) => {
    setIsAddModal(false);
    setTripDetails(trips.find(trip => trip.id === id));
    setShowTripModal(true);
  }

  const handleCloseTripModal = () => setShowTripModal(false);

  // delete modal
  const [showDeleteTripModal, setShowDeleteTripModal] = useState<boolean>(false);
  const [deleteTripModalError, setDeleteTripModalError] = useState<string | null>(null);

  const handleOpenDeleteTripModal = (id: number) => {
    setTripDetails(trips.find(trip => trip.id === id));
    setShowDeleteTripModal(true);
  };

  const handleCloseDeleteTripModal = () => setShowDeleteTripModal(false);

  // get trips
  useEffect(() => {
    getTrips().then((data) => setTrips(data));
  }, []);


  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <Button onClick={handleOpenAddTripModal} variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>
          Add Trip
        </Button>
        <Modal show={showTripModal} onHide={handleCloseTripModal}>
          <Modal.Header closeButton>
            <Modal.Title>{isAddModal ? 'Add Trip' : 'Edit Trip'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl variant="standard" fullWidth>
              {tripModalError && (
                <div className="alert alert-danger" role="alert">
                  {tripModalError}
                </div>
              )}
              <div className="row mb-3 px-3">
                <div className="col-6">
                  <TextField 
                    required 
                    id="new-trip-departure-date" 
                    label="Departure Date"
                    variant="standard"
                    fullWidth 
                    value = { tripDetails.departure_date }
                    onChange = { (e) => setTripDetails({ ...tripDetails, departure_date: e.target.value }) }
                  />
                </div>
                <div className="col-6">
                  <TextField
                    required
                    id="new-trip-arrival-date"
                    label="Arrival Date"
                    variant="standard"
                    fullWidth
                    value = { tripDetails.arrival_date }
                    onChange = { (e) => setTripDetails({ ...tripDetails, arrival_date: e.target.value }) }
                  />
                </div>
                <div className="col-6">
                  <TextField
                    required
                    id="new-trip-destination"
                    label="Destination"
                    variant="standard"
                    fullWidth
                    value = { tripDetails.destination }
                    onChange = { (e) => setTripDetails({ ...tripDetails, destination: e.target.value }) }
                  />
                </div>
                <div className="col-6">
                  <TextField
                    required
                    id="new-trip-price"
                    label="Price"
                    variant="standard"
                    fullWidth
                    value = { tripDetails.price }
                    onChange = { (e) => setTripDetails({ ...tripDetails, price: e.target.value }) }
                  />
                </div>
                <div className="col-6">
                  <TextField
                    required
                    id="new-trip-office-id"
                    label="Office ID"
                    variant="standard"
                    fullWidth
                    value = { tripDetails.office_id }
                    onChange = { (e) => setTripDetails({ ...tripDetails, office_id: e.target.value }) }
                  />
                </div>
                <div className="mb-3"></div>
                <div className="col">
                  <TextareaAutosize
                    minRows={6}
                    required
                    id="new-trip-description"
                    label="Description"
                    variant="standard"
                    className="form-control w-100"
                    value = { tripDetails.description }
                    onChange = { (e) => setTripDetails({ ...tripDetails, description: e.target.value }) }
                  />
                </div>
              </div>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            {isAddModal && (
              <Button variant="contained" color="primary" className="me-2" onClick={handleCreateTrip}>Add</Button>
            )}
            {!isAddModal && (
              <Button variant="contained" color="primary" className="me-2" onClick={handleUpdateTrip}>Save</Button>
            )}
            <Button variant="outlined" color="error" onClick={handleCloseTripModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h3 className="mb-4">Trips</h3>
      <DashboardTable 
        columns = {['id', 'departure_date', 'arrival_date', 'destination', 'price', 'office_id']}
        column_names = {['#', 'Departure Date', 'Arrival Date', 'Destination', 'Price', 'Office ID']}
        data = {trips}
        handlers = {{
          editModalHandler: handleOpenEditTripModal,
          deleteModalHandler: handleOpenDeleteTripModal 
        }}
      />
      <Modal show={showDeleteTripModal} onHide={handleCloseDeleteTripModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the trip going to "{ tripDetails.destination }"?</p>
          {deleteTripModalError && (
            <div className="alert alert-danger" role="alert">
              {deleteTripModalError}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="error" className="me-2" onClick={handleDeleteTrip}>Delete</Button>
          <Button variant="outlined" color="primary" onClick={handleCloseDeleteTripModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Trips;
