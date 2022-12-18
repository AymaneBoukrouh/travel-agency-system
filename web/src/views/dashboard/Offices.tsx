import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { useTheme, Button, FormControl, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import $ from 'jquery';

const Offices = () => {
  const theme = useTheme();

  const [offices, setOffices] = useState([]);

  // modal
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAddOffice = () => {
    alert('Add Office');
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/offices')
      .then(response => response.json())
      .then(data => setOffices(data))
  }, []);

  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>
          Add Office
        </Button>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Office</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl variant="standard" fullWidth>
              <div className="row mb-3 px-5">
                <div className="col">
                  <TextField 
                    required 
                    id="new-office-city" 
                    label="City" 
                    variant="standard" 
                    fullWidth 
                  />
                </div>
              </div>
            </FormControl>
            {false && (
            <div className="mb-3">
              <span>Starting Material</span>
              {false && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Diameter</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Length</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              )}
              {false && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Thickness</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Width</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Length</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              )}
            </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="primary" className="me-2" onClick={handleAddOffice}>Add</Button>
            <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h3 className="mb-4">Offices</h3>
      <table className="table table-striped" id="offices-tabl">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {offices && 
        <tbody>
          {offices.map((office) => (
            <tr key={office.id}>
              <th scope="row">#{office.id}</th>
              <td>{office.city}</td>
              <td>
                <button className="btn text-primary"><Edit /></button>
                <button className="btn text-danger"><Delete /></button>
              </td>
            </tr>
          ))}
        </tbody>
        }
        {!offices && <tbody></tbody>}
      </table>
    </div>
  )
}

export default Offices;
