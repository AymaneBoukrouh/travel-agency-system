import { Outlet } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import TopBar from '@/components/TopBar';

import '@/App.css';

function App() {
  // theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#403294',
        light: '#6e5ab5',
        dark: '#1a0c5c'
      },
      secondary: {
        main: '#5ed0c1',
        light: '#8ee6d8',
        dark: '#2ca897'
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
