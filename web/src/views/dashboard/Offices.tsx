import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useTheme, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

import $ from 'jquery';

const Offices = () => {
  const theme = useTheme();

  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/offices')
      .then(response => response.json())
      .then(data => setOffices(data))
  }, []);

  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <NavLink to="/dashboard/offices/new" className="text-decoration-none">
          <Button variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>
            Add Office
          </Button>
        </NavLink>
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
