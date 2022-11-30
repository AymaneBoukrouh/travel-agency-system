import { useState } from 'react';

import { useAuthContext } from './useAuthContext';

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (user: LoginData) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user.email, password: user.password })
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    localStorage.setItem('accessToken', data.access);
    localStorage.setItem('refreshToken', data.refresh);
    const payload = { accessToken: data.access, refreshToken: data.refresh };
    dispatch({ type: 'LOGIN', payload });
  }

  return { login, error, isLoading };
}
