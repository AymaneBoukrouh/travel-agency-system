import { Outlet, NavLink } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import HelloWorld from './views/HelloWorld';

import TopBar from './components/TopBar';

import './App.css';

function App() {
  // theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#222f42',
        light: '#2c3e50',
        dark: '#1a2636'
      },
      secondary: {
        main: '#5ed0c1'
      }
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="d-flex flex-column h-100">
        <TopBar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
