import { NavLink } from 'react-router-dom';

import { useTheme, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Offices = () => {
  const theme = useTheme();

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
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">City</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#1</th>
            <td>Tangier</td>
            <td>
              <button className="btn text-primary"><Edit /></button>
              <button className="btn text-danger"><Delete /></button>
            </td>
          </tr>
          <tr>
            <th scope="row">#2</th>
            <td>Rabat</td>
            <td>
              <button className="btn text-primary"><Edit /></button>
              <button className="btn text-danger"><Delete /></button>
            </td>
          </tr>
          <tr>
            <th scope="row">#3</th>
            <td>Casablanca</td>
            <td>
              <button className="btn text-primary"><Edit /></button>
              <button className="btn text-danger"><Delete /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Offices;
