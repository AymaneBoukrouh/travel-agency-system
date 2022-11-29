import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@mui/material';

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div className="d-flex justify-content-center bg-dark">
            <div className="p-3">
                <NavLink 
                to="/hello_world"
                className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link text-light"}
                >
                    Hello World
                </NavLink>
            </div>
            <div className="p-3">
                <NavLink 
                to="/login"
                className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link text-light"}
                >
                Login
                </NavLink>
            </div>
            <div className="p-3">
                <NavLink 
                to="/register" 
                className={({ isActive }) => isActive ? "nav-link text-primary" : "nav-link text-light"}
                >
                Register
                </NavLink>
            </div>
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
