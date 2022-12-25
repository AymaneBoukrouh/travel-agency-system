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
      setOfficeModalError('Please fill out all fields.');
      return false;
    }
  }

  const handleCreateOffice = async () => {
    checkOfficeDetails(); // check that all fields are filled out
    const newOffice = await createOffice(officeDetails);

    if (newOffice) {
      setOffices([...offices, newOffice]);
      handleCloseOfficeModal();
      setOfficeModalError(null);
    }

    else {
      setOfficeModalError('Office already exists.');
    }
  }

  const handleUpdateOffice = async () => {
    checkOfficeDetails(); // check that all fields are filled out
    const updatedOffice = await updateOffice(officeDetails);

    if (updatedOffice) {
      setOffices(offices.map(office => office.id === officeDetails.id ? officeDetails : office));
      handleCloseOfficeModal();
      setOfficeModalError(null);
    }

    else {
      setOfficeModalError('An error occured.');
    }
  };

  const handleDeleteOffice = async () => {
    const deletedOffice = await deleteOffice(officeDetails.id);

    if (deletedOffice) {
      setOffices(offices.filter(office => office.id !== officeDetails.id ));
      handleCloseDeleteOfficeModal();
      setDeleteOfficeModalError(null);
    }

    else {
      setDeleteOfficeModalError('An error occurred.');
    }
  };

  // add/edit modal
  const [isAddModal, setIsAddModal] = useState<boolean>(true); // true = add, false = edit
  const [showOfficeModal, setShowOfficeModal] = useState<boolean>(false);
  const [officeModalError, setOfficeModalError] = useState<string | null>(null);

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

  // delete modal
  const [showDeleteOfficeModal, setShowDeleteOfficeModal] = useState<boolean>(false);
  const [deleteOfficeModalError, setDeleteOfficeModalError] = useState<string | null>(null);

  const handleOpenDeleteOfficeModal = (id: number) => {
    setOfficeDetails(offices.find(office => office.id === id));
    setShowDeleteOfficeModal(true);
  };

  const handleCloseDeleteOfficeModal = () => setShowDeleteOfficeModal(false);

  // get offices
  useEffect(() => {
    getOffices().then((data) => setOffices(data));
  }, []);


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
          <p>Are you sure you want to delete the office located in "{ officeDetails.city }"?</p>
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
