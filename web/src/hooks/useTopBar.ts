import { useTopBarContext } from '@/hooks/useTopBarContext';

export const useTopBar = () => {
  const { dispatch } = useTopBarContext();

  const setTopBarTransparent = () => {
    dispatch({ type: 'SET_TRANSPARENT' });
  };

  const setTopBarBackgroundColor = (background_color: string) => {
    dispatch({ 
      type: 'SET_BACKGROUND_COLOR',
      payload : { background_color }
    });
  };

  return { setTopBarTransparent, setTopBarBackgroundColor };
};