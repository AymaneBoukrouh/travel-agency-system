import { NavLink } from 'react-router-dom';

import { useTheme, TextField, MenuItem } from '@mui/material';

const NewTrip = () => {
  const theme = useTheme();

  return (
    <div className="bg-white rounded-3 p-5">
      <div className="mb-3">
        <h3 className='text-gray-900'>New Trip</h3>
      </div>
      <div className="mb-3">Office</div>
      <div className="mb-3 w-25">
        <TextField
          select
          label = 'Select'
          variant = 'outlined'
          color = 'primary'
          defaultValue = '1'
          sx = {{
            input: { color: 'black' },
            label: { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
              svg: {
                color: 'black',
              }
            },
            select: {
              '&:focus': {
                backgroundColor: 'transparent',
              }
            }
          }}
          fullWidth
        >
          <MenuItem value="1">Rabat</MenuItem>
          <MenuItem value="2">Tangier</MenuItem>
          <MenuItem value="3">Casablanca</MenuItem>
        </TextField>
      </div>
      <div className="mb-3">Date</div>
      <div className="d-flex gap-3 mb-3 w-25">
        <TextField
          type = 'date'
          label = 'From'
          variant = 'outlined'
          color = 'primary'
          defaultValue = '2022-01-01'
          sx = {{ 
            input: { color: 'black' },
            label: { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              }
            }
          }}
          fullWidth
        />
        <TextField 
          type = 'date'
          label = 'To'
          variant = 'outlined'
          color = 'primary'
          defaultValue = '2022-01-01'
          sx = {{ 
            input: { color: 'black' },
            label: { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              }
            }
          }}
          fullWidth
        />
      </div>
      <div className="mb-3">Destination</div>
      <div className="mb-3 w-25">
        <TextField
          select
          label = 'Destination'
          variant = 'outlined'
          color = 'primary'
          defaultValue = 'Paris'
          sx = {{
            input: { color: 'black' },
            label: { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
              svg: {
                color: 'black',
              }
            },
            select: {
              '&:focus': {
                backgroundColor: 'transparent',
              }
            }
          }}
          fullWidth
        >
          <MenuItem value="Paris">Paris</MenuItem>
          <MenuItem value="London">London</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
        </TextField>
      </div>
      <div className="mb-3">Description</div>
      <div className="mb-3 w-50">
        <TextField
          multiline
          variant = 'outlined'
          color = 'primary'
          rows = { 4 }
          maxRows = { 10 }
          sx = {{
            input: { color: 'black' },
            label: { color: 'black' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
              color: 'black',
              svg: {
                color: 'black',
              }
            },
            select: {
              '&:focus': {
                backgroundColor: 'transparent',
              }
            }
          }}
          fullWidth
        />
      </div>
      <div className="d-flex gap-1 mb-3">
        <button className="text-light btn p-2 px-4" style={{ backgroundColor: theme.palette.primary.main }}>Save</button>
        <NavLink to="/dashboard/trips">
          <button className="btn btn-danger p-2 px-4">Cancel</button>
        </NavLink>
      </div>
    </div>
  )
}

export default NewTrip;
