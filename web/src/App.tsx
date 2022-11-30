import { Outlet, NavLink } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import HelloWorld from './views/HelloWorld';

import TopBar from './components/TopBar';

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
      <div className="h-100">
        <TopBar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
