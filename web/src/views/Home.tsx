import Trips from '../components/Trips';

import { useTheme } from '@mui/material';

const Auth = () => {
  const theme = useTheme();

  return (
    <div className="d-flex flex-column" style={{ padding: '30px 15%', backgroundColor: theme.palette.primary.dark }}>
      <div className="p-3">
        <Trips />
      </div>
    </div>
  )
}

export default Auth;
