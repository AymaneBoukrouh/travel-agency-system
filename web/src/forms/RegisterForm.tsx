import { useState, FormEvent } from 'react';

import { useRegister } from '../hooks/useRegister';

import { Link } from 'react-router-dom';

import { FormControl, FormLabel, TextField, Button } from '@mui/material';

const LoginForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register, isLoading, error } = useRegister();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await register({ firstname, lastname, email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl style={{ padding: '20%' }} variant="standard" fullWidth>
        <FormLabel component="legend"><h2>Register</h2></FormLabel>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <TextField id="first-name" label="First Name" variant="standard" color="secondary" onChange={(e)=>setFirstname(e.target.value)} fullWidth />
        </div>
        <div className="mb-3">
          <TextField id="last-name" label="Last Name" variant="standard" color="secondary" onChange={(e)=>setLastname(e.target.value)} fullWidth />
        </div>
        <div className="mb-3">
          <TextField id="email" label="E-Mail" variant="standard" color="secondary" onChange={(e)=>setEmail(e.target.value)} fullWidth />
        </div>
        <div className="mb-3">
          <TextField type="password" id="password" label="Password" color="secondary" variant="standard" onChange={(e)=>setPassword(e.target.value)} fullWidth />
        </div>
        <div className="mb-3">
          <TextField type="password" id="confirm-password" label="Confirm Password" variant="standard" color="secondary" onChange={(e)=>setConfirmPassword(e.target.value)} fullWidth />
        </div>
        <div className="mb-3">
          <Button variant="contained" type="submit" className="rounded-pill px-5 py-2 me-3" style={{ backgroundColor: '#5ed0c1' }} disabled={isLoading}>Register</Button>
          <span className="text-muted">Already a member? <Link to="/login" style={{ color: '#5ed0c1' }}>Login</Link></span>
        </div>
      </FormControl>
    </form>
  )
}

export default LoginForm;
