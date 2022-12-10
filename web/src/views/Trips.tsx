import { useEffect } from 'react';

import { useTheme, Button, TextField, InputLabel, InputAdornment } from '@mui/material';

import { Search, Brightness3Outlined, AddCircleOutline, RemoveCircleOutline, Person } from '@mui/icons-material';

import { useTopBar } from '@/hooks/useTopBar';

import Trips from '@/components/Trips';

const Auth = () => {
  const theme = useTheme();

  const { setTopBarBackgroundColor } = useTopBar();

  useEffect(() => {
    setTopBarBackgroundColor(theme.palette.primary.main);
  }, [])

  return (
    <div className="bg-light">
      <div className="position-relative" style={{ height: '50vh' }}>
        <div 
          className="position-absolute top-0 start-0 bg-dark w-100 h-50" 
          style={{ backgroundImage: "url('/trips-bg.jpg')", backgroundPosition: 'right', backgroundSize: 'cover' }}
        >
        </div>
        <div className="position-relative position-absolute top-50 start-50 translate-middle rounded-3 bg-light w-50 h-75 p-5 shadow">
          <div className="mb-3">
            <TextField
              className='bg-white w-100'
              placeholder='Search by country or city'
              sx = {{ input: { color: 'black' } }}
              InputProps = {{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search style={{ color: 'black' }} />
                  </InputAdornment>
                )
              }}
              />
          </div>
          <div className="mb-3">
            <div className="d-flex gap-3">
              <TextField
                className='bg-white w-50'
                type='date'
                sx = {{ input: { color: 'black' } }}
                defaultValue = '2022-01-20'
              />
              <InputLabel className='d-flex justify-content-between align-items-center px-3 bg-white w-50'>
                <span className="text-dark">5 Nights</span>
                <Brightness3Outlined className="text-dark" style={{ transform: "rotate(145deg)" }} />
              </InputLabel>
              <TextField
                className='bg-white w-50'
                type='date'
                sx = {{ input: { color: 'black' } }}
                defaultValue = '2022-01-20'
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center bg-white p-3 mb-3">
            <Person className="text-dark me-4" />
            <RemoveCircleOutline style={{ color: 'rgba(0, 0, 0, .2)' }} />
            <span className="mx-3">1</span>
            <AddCircleOutline color="primary" />
          </div>
          <div className="position-absolute top-100 start-50 translate-middle w-50">
            <Button className="text-light w-100 p-3" variant="contained" style={{ backgroundColor: theme.palette.primary.light }}>Search</Button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column" style={{ padding: '30px 15%' }}>
        <div className="mb-3">
          <Trips title="Morocco" />
        </div>
        <div className="p-3 mb-3">
          <Trips title="Abroad" />
        </div>
      </div>
    </div>
  )
}

export default Auth;
