import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { TextField, MenuItem, useTheme } from '@mui/material';

import { useTopBar } from '@/hooks/useTopBar';

import logo from '@/logo.svg';

const HelloWorld = () => {
  // locale
  const { i18n } = useTranslation();

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

  // theme
  const theme = useTheme();

  const { setTopBarBackgroundColor } = useTopBar();

  // init
  useEffect(() => {
    updateHelloWorld();
    setTopBarBackgroundColor(theme.palette.primary.dark);
  }, [locale]);


  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100" style={{ backgroundColor: theme.palette.primary.dark }}>
      <img src={logo} className="App-logo" alt="logo" />
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
        <div className="p-3 text-light text-center">
            {helloWorld}
        </div>
      </div>
    </div>
  )
}

export default HelloWorld;
