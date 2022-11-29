import { useEffect, useState } from 'react';

import { TextField, MenuItem } from '@mui/material';

import logo from '../logo.svg';

const HelloWorld = () => {
  // locale
  const locales = [
    { code: 'en-US', name: 'English' },
    { code: 'fr-FR', name: 'Français' },
    { code: 'de-DE', name: 'Deutsch' }
  ];

  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'en-US');

  const handleLocaleChange = (event: any) => {
    setLocale(event.target.value);
    localStorage.setItem('locale', event.target.value);
  }

  // hello world
  const [helloWorld, setHelloWorld] = useState('Loading...');
  const updateHelloWorld = () => {
    fetch('http://localhost:8000/api/hello_world', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': locale
      }
    })
      .then(response => response.json())
      .then(data => setHelloWorld(data.message));
  };

  // init
  useEffect(() => {
    updateHelloWorld();
  }, [locale]);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <TextField
            id = 'locale'
            select
            label = 'Locale'
            value = {locale}
            onChange = {handleLocaleChange}
        >
            {locales.map((option) => (
            <MenuItem key={option.code} value={option.code}>
                {option.name}
            </MenuItem>
            ))}
        </TextField>
        <div className="p-3">
            {helloWorld}
        </div>
      </div>
    </div>
  )
}

export default HelloWorld;
