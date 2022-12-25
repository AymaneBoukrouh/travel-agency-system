import { useState } from 'react';
import { User } from '@/types/User';


const checkResponse = async (response: Response, setError: callable) => {
  const data = await response.json();

  if (!response.ok) {
    setError(data.message);
    return false;
  }

  return data;
}


export const useUser = () => {
  const [error, setError] = useState('');

  // GET /api/users
  const getUsers = async () => {
    const response = await fetch('http://localhost:8000/api/users');
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as User[];
  }

  // GET /api/users/:id
  const getUser = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/users/${id}`);
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as User;
  }

  // PUT /api/users/:id
  const updateUser = async (user: User) => {
    const response = await fetch(`http://localhost:8000/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as User;
  }

  // DELETE /api/users/:id
  const deleteUser = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) { // not using checkResponse here because we don't need the data
      setError('An error occured.');
      return false;
    }

    return true;
  }

  return { getUsers, getUser, updateUser, deleteUser, error };
}
