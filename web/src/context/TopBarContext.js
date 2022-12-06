import { createContext, useReducer, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';

export const TopBarContext = createContext();

export const topbarReducer = (state, action) => {
  switch (action.type) {
    case 'FIXED_BLURRED_TRANSPARENT':
      return {
        background_color: null,
        fixed_blurred_transparent: true
      }
    case 'BACKGROUND_COLOR':
      return {
        background_color: action.payload.background_color,
        fixed_blurred_transparent: false
      }
    default:
      return state;
  }
}

export const TopBarProvider = ({ children }) => {
  const theme = useTheme();

  const [state, dispatch] = useReducer(topbarReducer, {
    background_color: null,
    fixed_blurred_transparent: false
  });

  useEffect(() => {
    dispatch({ 
      type: 'BACKGROUND_COLOR',
      payload: {
        background_color: theme.palette.primary.dark,
        fixed_blurred_transparent: false
      }
    });
  }, []);

  return (
    <TopBarContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TopBarContext.Provider>
  )
}
