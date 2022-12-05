import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material';

const TopBar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const theme = useTheme();

  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: theme.palette.primary.dark}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="p-3">
                  <NavLink 
                    to = "/hello_world"
                    className = "nav-link"
                    style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                      {t('Hello')}
                  </NavLink>
              </div>
              <div className="p-3">
                  <NavLink 
                  to = "/trips" 
                  className = "nav-link"
                  style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                    {t('Trips')}
                  </NavLink>
              </div>
              <div className="p-3">
                  <NavLink
                    to = "/dashboard"
                    className = "nav-link"
                    style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                    {t('Dashboard')}
                  </NavLink>
              </div>
            </div>
            {!user && <div className="d-flex">
              <div className="p-3">
                  <NavLink 
                    to = "/login"
                    className = "nav-link"
                    style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                  Login
                  </NavLink>
              </div>
              <div className="p-3">
                  <NavLink 
                  to = "/register" 
                  className = "nav-link"
                  style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                  Register
                  </NavLink>
              </div>
            </div>}
            {user && <div>
              <div className="p-3">
                <button className="btn nav-link" onClick={logout}>Logout</button>
              </div>
            </div>}
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
