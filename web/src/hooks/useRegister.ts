import { useState } from 'react';

interface RegisterData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useRegister = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const register = async (user: RegisterData) => {
    setIsLoading(true);
    setError('');

    if (user.password !== user.confirmPassword) {
      setError('Passwords do not match!');
      setIsLoading(false);
      return;
    }

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      setIsLoading(false);
      return;
    }

    setError('Account created successfully!');
    setIsLoading(false);
  }

  return { register, error, isLoading };
}
