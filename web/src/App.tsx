import { Outlet, NavLink } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import HelloWorld from './views/HelloWorld';

import './App.css';

function App() {
  // theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <div className="d-flex justify-content-center align-items-center bg-dark">
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
        <header className="App-header">
          <Outlet />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
