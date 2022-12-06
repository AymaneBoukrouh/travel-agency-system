import { Outlet, useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material';

import { useAuthContext } from '@/hooks/useAuthContext';

const Auth = () => {
  const theme = useTheme();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    navigate('/trips');
  }

  return (
    <div className="container-fluid h-100" style={{ backgroundColor: theme.palette.primary.main }}>
      <div className="row h-100">
        <div className="col-6" style={{ backgroundColor: theme.palette.secondary.main }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <img className="img-fluid w-75" src="/airlines.svg" alt="logo" />
          </div>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Auth;
