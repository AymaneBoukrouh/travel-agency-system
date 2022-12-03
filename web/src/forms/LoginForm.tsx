import { useState, FormEvent } from 'react';

import { useLogin } from '../hooks/useLogin';

import { Link } from 'react-router-dom';

import { FormControl, FormLabel, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  const theme = useTheme();

  return (
    <form onSubmit={handleSubmit}>
      <FormControl style={{ padding: '20%' }} variant="standard" fullWidth>
        <FormLabel component="legend"><h2>Login</h2></FormLabel>
        {error && <div className="alert text-dark" style={{ backgroundColor: '#fff' }}>{error}</div>}
        <div className="mb-3">
          <TextField id="email" label="E-Mail" variant="standard" color="secondary" onChange={(e)=>setEmail(e.target.value)} fullWidth />
        </div>
        <div className="mb-3">
          <TextField type="password" id="password" label="Password" color="secondary" onChange={(e)=>setPassword(e.target.value)} variant="standard" fullWidth />
        </div>
        <div className="mb-3">
          <Button 
            variant = "contained" 
            type = "submit"
            className = "rounded-pill px-5 py-2 me-3" 
            disabled = {isLoading} 
            style = {{ 
              backgroundColor: theme.palette.secondary.main, 
              color: theme.palette.primary.main
            }}>
              Login
            </Button>
          <span className="text-muted">Not a member? <Link to="/register" style={{ color: '#5ed0c1' }}>Register</Link></span>
        </div>
      </FormControl>
    </form>
  )
}

export default LoginForm;
