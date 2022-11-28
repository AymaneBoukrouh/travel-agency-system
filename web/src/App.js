import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { TextField, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [message, setMessage] = useState('Loading...');

  const updateMessage = (locale) => {
    fetch('http://localhost:8000/api/hello_world', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': locale
      }
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      });
  }

  const locale = localStorage.getItem('locale') || 'en-US';
  useEffect(() => {
    updateMessage(locale);
  }, []);

  // locales: en-EN, de-DE, fr-FR
  const locales = [
    { code: 'en-US', name: 'English' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' }
  ];

  const handleUpdateLocale = (event) => {
    updateMessage(event.target.value);
    localStorage.setItem('locale', event.target.value);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <TextField
              id = 'locale'
              defaultValue = {locale}
              onChange = {handleUpdateLocale}
              select
            >
              {locales.map(locale => (
                <MenuItem key={locale.code} value={locale.code}>
                  {locale.name}
                </MenuItem>
              ))}
            </TextField>
          <p>
            { message }
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
