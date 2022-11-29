import { Link } from 'react-router-dom';

import { FormControl, FormLabel, TextField, Button } from '@mui/material';

const LoginForm = () => {
  return (
    <FormControl style={{ padding: '20%' }} variant="standard" fullWidth>
      <FormLabel component="legend"><h2>Login</h2></FormLabel>
      <div className="mb-3">
        <TextField id="email" label="E-Mail" variant="standard" fullWidth />
      </div>
      <div className="mb-3">
        <TextField type="password" id="password" label="Password" variant="standard" fullWidth />
      </div>
      <div className="mb-3">
        <Button variant="contained" className="rounded-pill px-5 py-2 me-3" style={{ backgroundColor: '#5ed0c1' }}>Login</Button>
        <span className="text-muted">Not a member? <Link to="/register" style={{ color: '#5ed0c1' }}>Register</Link></span>
      </div>
    </FormControl>
  )
}

export default LoginForm;
