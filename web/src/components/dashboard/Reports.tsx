import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';

const Reports = () => {
  return (
    <div>
      <h3 className="mb-3">Reports</h3>
      <div className="btn w-100">
        <Button variant="contained" color="primary" size="large" className="d-flex justify-content-between align-items-center" fullWidth>
          <span>Revenues</span>
          <Download />
        </Button>
      </div>
      <div className="btn w-100">
        <Button variant="contained" color="primary" size="large" className="d-flex justify-content-between align-items-center" fullWidth>
          <span>Expenses</span>
          <Download />
        </Button>
      </div>
      <div className="btn w-100">
        <Button variant="contained" color="primary" size="large" className="d-flex justify-content-between align-items-center" fullWidth>
          <span>Bookings</span>
          <Download />
        </Button>
      </div>
      <div className="btn w-100">
        <Button variant="contained" color="primary" size="large" className="d-flex justify-content-between align-items-center" fullWidth>
          <span>User</span>
          <Download />
        </Button>
      </div>
      <div className="btn w-100">
        <Button variant="contained" color="primary" size="large" className="d-flex justify-content-between align-items-center" fullWidth>
          <span>Offices</span>
          <Download />
        </Button>
      </div>
      <div className="btn w-100">
        <Button variant="contained" color="primary" size="large" className="d-flex justify-content-between align-items-center" fullWidth>
          <span>Trips</span>
          <Download />
        </Button>
      </div>
    </div>
  );
};

export default Reports;
