import { TopBarContext } from '@/context/TopBarContext';
import { useContext } from 'react';

export const useTopBarContext = () => {
  const context = useContext(TopBarContext);

  if (!context) {
    throw new Error('useTopBarContext must be used within an TopBarProvider');
  }

  return context;
}