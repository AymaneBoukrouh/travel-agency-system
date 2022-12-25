import { useState } from 'react';

import { useAuthContext } from '@/hooks/useAuthContext';

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (user: LoginData) => {
    setIsLoading(true);
    setError('');

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user.email, password: user.password })
    });

    const data = await response.json();

    if (response.status === 401) {
      setError('Invalid credentials');
      setIsLoading(false);
      return;
    }

    if (!response.ok) {
      setError('An error occurred');
      setIsLoading(false);
      return;
    }

    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);

    // check if admin
    const adminResponse = await fetch('http://localhost:8000/api/current_user', {
      headers: {
        Authorization: `Bearer ${data.access}`
      }
    });

    const adminData = await adminResponse.json();
    localStorage.setItem('isAdmin', adminData.is_admin.toString());
    

    setIsLoading(false);
    const payload = { accessToken: data.access, refreshToken: data.refresh };
    dispatch({ type: 'LOGIN', payload });
  }

  return { login, error, isLoading };
}
