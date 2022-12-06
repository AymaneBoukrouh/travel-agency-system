import { NavLink } from 'react-router-dom';

import { useTheme } from '@mui/material';

const Error = () => {
  const theme = useTheme();

  return (
    <div 
      className="d-flex justify-content-center align-items-center h-100" 
      style={{ backgroundImage: 'url("/404-bg.jpg")', backgroundSize: 'cover' }}
    >
      <div className="position-relative pb-5 text-center">
        <div className="display-1 text-light">404</div>
        <div className="display-3 text-light">Page not found.</div>
        <NavLink to="/" className="btn mt-3">
          <div className="rounded-pill px-5 py-3 h3 text-light" style={{ backgroundColor: theme.palette.secondary.dark }}>Go home</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
