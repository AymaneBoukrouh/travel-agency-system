import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useTheme, Button, FormControl, TextField } from '@mui/material';

import DashboardTable from '@/components/dashboard/Table';
import { Office } from '@/types/Office';
import { useOffice } from '@/hooks/useOffice';


const Offices = () => {
  const theme = useTheme();

  // office
  const [offices, setOffices] = useState<Office[]>([]);
  const [officeDetails, setOfficeDetails] = useState<Office>({} as Office);
  const { getOffices, getOffice, createOffice, updateOffice, deleteOffice, error } = useOffice();

  // office handlers
  const checkOfficeDetails = () => { // check that all fields are filled out
    if (!officeDetails.city || !officeDetails.zipcode) {
      setAddOfficeModalError('Please fill out all fields.');
      return false;
    }
  }

  const handleCreateOffice = async () => {
    checkOfficeDetails(); // check that all fields are filled out

    const newOffice = await createOffice({
      city: officeDetails.city,
      zipcode: officeDetails.zipcode,
    });

    if (newOffice) {
      setOffices([...offices, newOffice]);
      handleCloseOfficeModal();
      setAddOfficeModalError('');
    }

    else {
      setAddOfficeModalError('Office already exists.');
    }
  }

  const handleUpdateOffice = async () => {
    if (!officeDetails.city || !officeDetails.zipcode) {
      setAddOfficeModalError('Please fill out all fields.');
      return;
    }

    const response = await updateOffice(officeDetails);

    if (response) {
      setOffices(offices.map(office => office.id === officeDetails.id ? officeDetails : office));
      handleCloseOfficeModal();
      setAddOfficeModalError('');
    }

    else {
      setAddOfficeModalError('An error occured.');
    }
  };


  // add/edit modal
  const [isAddModal, setIsAddModal] = useState(true); // true = add, false = edit
  const [showOfficeModal, setShowOfficeModal] = useState<boolean>(false);
  const [officeModalError, setOfficeModalError] = useState<string>('');

  const handleOpenAddOfficeModal = () => {
    setOfficeDetails({} as Office);
    setIsAddModal(true);
    setShowOfficeModal(true);
  }

  const handleOpenEditOfficeModal = (id: number) => {
    setIsAddModal(false);
    setOfficeDetails(offices.find(office => office.id === id));
    setShowOfficeModal(true);
  }

  const handleCloseOfficeModal = () => setShowOfficeModal(false);

  // get offices
  useEffect(() => {
    getOffices().then((data) => setOffices(data));
  }, []);


  // *** to refactor ***
  // delete modal
  const [showDeleteOfficeModal, setShowDeleteOfficeModal] = useState(false);
  const [deleteOfficeModalError, setDeleteOfficeModalError] = useState('');
  const [officeToDeleteID, setOfficeToDeleteID] = useState(-1);
  const [officeToDeleteCity, setOfficeToDeleteCity] = useState('');

  const handleOpenDeleteOfficeModal = (id: number) => {
    setOfficeToDeleteID(id);
    setOfficeToDeleteCity(offices.find(office => office.id === id).city);
    setShowDeleteOfficeModal(true);
  };

  const handleCloseDeleteOfficeModal = () => setShowDeleteOfficeModal(false);
  
  const handleDeleteOffice = async () => {
    if (officeToDeleteID === -1) {
      setDeleteOfficeModalError('An error occurred.');
      return;
    }

    const response = await fetch(`http://localhost:8000/api/offices/${officeToDeleteID}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      setOffices(offices.filter(office => office.id !== officeToDeleteID));
      handleCloseDeleteOfficeModal();
      setDeleteOfficeModalError('');
    }

    else {
      setDeleteOfficeModalError('An error occurred.');
    }
  };

  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <Button onClick={handleOpenAddOfficeModal} variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>
          Add Office
        </Button>
        <Modal show={showOfficeModal} onHide={handleCloseOfficeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{isAddModal ? 'Add Office' : 'Edit Office'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl variant="standard" fullWidth>
              {officeModalError && (
                <div className="alert alert-danger" role="alert">
                  {officeModalError}
                </div>
              )}
              <div className="row mb-3 px-3">
                <div className="col">
                  <TextField 
                    required 
                    id="new-office-city" 
                    label="City" 
                    variant="standard" 
                    fullWidth 
                    value = { officeDetails.city }
                    onChange = { (e) => setOfficeDetails({ ...officeDetails, city: e.target.value }) }
                  />
                </div>
                <div className="col">
                  <TextField
                    required
                    id="new-office-zipcode"
                    label="Zip Code"
                    variant="standard"
                    fullWidth
                    value = { officeDetails.zipcode }
                    onChange = { (e) => setOfficeDetails({ ...officeDetails, zipcode: e.target.value }) }
                  />
                </div>
              </div>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            {isAddModal && (
              <Button variant="contained" color="primary" className="me-2" onClick={handleCreateOffice}>Add</Button>
            )}
            {!isAddModal && (
              <Button variant="contained" color="primary" className="me-2" onClick={handleUpdateOffice}>Save</Button>
            )}
            <Button variant="outlined" color="error" onClick={handleCloseOfficeModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h3 className="mb-4">Offices</h3>
      <DashboardTable 
        columns = {['id', 'city', 'zipcode']}
        column_names = {['#', 'City', 'Zip Code']}
        data = {offices}
        handlers = {{
          editModalHandler: handleOpenEditOfficeModal,
          deleteModalHandler: handleOpenDeleteOfficeModal 
        }}
      />
      <Modal show={showDeleteOfficeModal} onHide={handleCloseDeleteOfficeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Office</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the office located in "{ officeToDeleteCity }"?</p>
          {deleteOfficeModalError && (
            <div className="alert alert-danger" role="alert">
              {deleteOfficeModalError}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="error" className="me-2" onClick={handleDeleteOffice}>Delete</Button>
          <Button variant="outlined" color="primary" onClick={handleCloseDeleteOfficeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Offices;
