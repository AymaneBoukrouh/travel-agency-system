import { NavLink } from 'react-router-dom';

import { useTheme, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const Trips = () => {
  const theme = useTheme();

  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <NavLink to="/dashboard/trips/new" className="text-decoration-none">
          <Button variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>
            Create Trip
          </Button>
        </NavLink>
      </div>
      <h3 className="mb-4">Trips</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Destination</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>My Trip</td>
            <td>My Destination</td>
            <td>2021-01-01</td>
            <td>2021-01-01</td>
            <td>
              <button className="btn text-primary"><Edit /></button>
              <button className="btn text-danger"><Delete /></button>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>My Trip</td>
            <td>My Destination</td>
            <td>2021-01-01</td>
            <td>2021-01-01</td>
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

export default Trips;
