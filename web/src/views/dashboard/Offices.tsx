import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { useTheme, Button, FormControl, TextField } from '@mui/material';

import DashboardTable from '@/components/dashboard/Table';

import $ from 'jquery';

const Offices = () => {
  const theme = useTheme();

  const [offices, setOffices] = useState([]);

  // modal
  const [showAddOfficeModal, setShowAddOfficeModal] = useState(false);
  const [addOfficeModalError, setAddOfficeModalError] = useState('');
  const handleOpenAddOfficeModal = () => setShowAddOfficeModal(true);
  const handleCloseAddOfficeModal = () => setShowAddOfficeModal(false);

  const handleAddOffice = async () => {
    if (!$('#new-office-city').val() || !$('#new-office-zipcode').val()) {
      setAddOfficeModalError('Please fill out all fields.');
      return;
    }

    const response = await fetch('http://localhost:8000/api/offices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: $('#new-office-city').val(),
        zipcode: $('#new-office-zipcode').val(),
      })
    });

    if (response.ok) {
      const data = await response.json();
      setOffices([...offices, data]);
      handleCloseAddOfficeModal();
      setAddOfficeModalError('');
    }

    else {
      setAddOfficeModalError('Office already exists.');
    }
  };

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

  useEffect(() => {
    fetch('http://localhost:8000/api/offices')
      .then(response => response.json())
      .then(data => setOffices(data))
  }, []);

  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <Button onClick={handleOpenAddOfficeModal} variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>
          Add Office
        </Button>
        <Modal show={showAddOfficeModal} onHide={handleCloseAddOfficeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Office</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl variant="standard" fullWidth>
              {addOfficeModalError && (
                <div className="alert alert-danger" role="alert">
                  {addOfficeModalError}
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
                  />
                </div>
                <div className="col">
                  <TextField
                    required
                    id="new-office-zipcode"
                    label="Zip Code"
                    variant="standard"
                    fullWidth
                  />
                </div>
              </div>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="primary" className="me-2" onClick={handleAddOffice}>Add</Button>
            <Button variant="outlined" color="error" onClick={handleCloseAddOfficeModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h3 className="mb-4">Offices</h3>
      <DashboardTable 
        columns = {['id', 'city', 'zipcode']}
        column_names = {['#', 'City', 'Zip Code']}
        data = {offices}
        handlers = {{ deleteModalHandler: handleOpenDeleteOfficeModal }}
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
