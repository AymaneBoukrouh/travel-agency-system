import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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

  useEffect(() => {
    updateMessage('en-EN');
  }, []);

  const updateLocale = () => {
    updateMessage(document.getElementById('locale').value);
  }

  const locales = [
    { code: 'en-US', name: 'English' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select onChange={() => updateLocale()} id="locale">
          {locales.map(locale => (
            <option key={locale.code} value={locale.code}>{locale.name}</option>
          ))}
        </select>
        <p>
          { message }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
