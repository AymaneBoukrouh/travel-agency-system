import { Card } from '@mui/material';
import { Tour } from '@mui/icons-material';

const DashboardStatItem = ({ value, name, comment, Icon, iconColor }) => {
  return (
    <Card className="d-flex justify-content-between text-dark px-3 py-2 bg-white" elevation={0}>
      <div>
        <div className="d-flex">
          <h1 className="fw-bold mb-0">{ value }</h1>
          <div className="mt-2 ms-2 text-muted">{ name }</div>
        </div>
        <div className="text-muted">{ comment }</div>
      </div>
      <div className="d-flex align-items-center">
        <Icon style={{ fontSize: '50px', color: iconColor, opacity: '.8' }} />
      </div>
    </Card>
  )
}

export default DashboardStatItem;
