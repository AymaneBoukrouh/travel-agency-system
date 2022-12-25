import { useAuthContext } from '@/hooks/useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isAdmin');
    dispatch({ type: 'LOGOUT' })
  }

  return { logout };
}