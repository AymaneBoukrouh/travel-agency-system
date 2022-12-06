import { createContext, useReducer } from 'react';

export const TopBarContext = createContext();

export const topbarReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSPARENT':
      return {
        background_color: null,
        topbar_transparent: true
      }
    case 'SET_BACKGROUND_COLOR':
      return {
        background_color: action.payload.background_color,
        topbar_transparent: false
      }
    default:
      return state;
  }
}

export const TopBarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(topbarReducer, {
    background_color: null,
    topbar_transparent: false
  });

  return (
    <TopBarContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TopBarContext.Provider>
  )
}
