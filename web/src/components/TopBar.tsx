import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useTheme, AppBar, Toolbar, Typography, TextField, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { useTopBarContext } from '@/hooks/useTopBarContext';

import { useAuthContext } from '@/hooks/useAuthContext';
import { useLogout } from '@/hooks/useLogout';

const TopBar = () => {
  const theme = useTheme();
  const { i18n, t } = useTranslation();

  //const { isAdmin } = useAuthContext(); # TODO: a bit slow, fix later
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const { user } = useAuthContext();
  const { logout } = useLogout();

  const { topbar_transparent, background_color } = useTopBarContext();

  // locale
  const locales = [
    { code: 'en-US', name: 'English' },
    { code: 'fr-FR', name: 'Français' },
    { code: 'de-DE', name: 'Deutsch' }
  ];

  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en-US');

  const handleLocaleChange = (event: any) => {
    setLocale(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('locale', event.target.value);
  }

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
                  to = "/trips" 
                  className = "nav-link"
                  style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                    {t('Trips')}
                  </NavLink>
              </div>
              {isAdmin && (
              <div className="p-3">
                  <NavLink
                    to = "/dashboard/main"
                    className = "nav-link"
                    style = {({ isActive} ) => isActive ? { color: theme.palette.secondary.main } : {}}
                  >
                    {t('Dashboard')}
                  </NavLink>
              </div>
              )}
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
            {user && <div className="d-flex align-items-center">
              <div>
              <TextField
                  id = 'locale'
                  select
                  label = 'Locale'
                  value = {locale}
                  onChange = {handleLocaleChange}
                  color = 'secondary'
              >
                  {locales.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                      {option.name}
                  </MenuItem>
                  ))}
              </TextField>
              </div>
              <div className="dropdown" data-bs-toggle="dropdown" id="user-menu-dropdown" aria-expanded="false">
                <button className="btn text-light">
                  <AccountCircle style={{ fontSize: '30px' }} />
                </button>
                <ul className="dropdown-menu" aria-labelledby="user-menu-dropdown">
                  <li>
                    <button className="dropdown-item text-danger" onClick={logout}>
                      {t('Logout')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>}
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
