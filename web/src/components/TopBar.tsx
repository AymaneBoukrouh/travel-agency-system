import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useTheme, AppBar, Toolbar, Typography } from '@mui/material';

import { useTopBarContext } from '@/hooks/useTopBarContext';

import { useAuthContext } from '@/hooks/useAuthContext';
import { useLogout } from '@/hooks/useLogout';

const TopBar = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const { topbar_transparent, background_color } = useTopBarContext();

  return (
    <AppBar 
      position = {topbar_transparent ? 'fixed' : 'static'} 
      style = {
        topbar_transparent ? 
        { background: 'none', backdropFilter: 'blur(2px)' } :
        { background: background_color }
      }>
      <Toolbar>
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
                    to = "/dashboard/main"
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
