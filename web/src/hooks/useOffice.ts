import { useState } from 'react';
import { Office } from '@/types/Office';


const checkResponse = async (response: Response, setError: callable) => {
  const data = await response.json();

  if (!response.ok) {
    setError(data.message);
    return false;
  }

  return data;
}


export const useOffice = () => {
  const [error, setError] = useState('');

  // GET /api/offices
  const getOffices = async () => {
    const response = await fetch('http://localhost:8000/api/offices');
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Office[];
  }

  // GET /api/offices/:id
  const getOffice = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/offices/${id}`);
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Office;
  }

  // POST /api/offices
  const createOffice = async (office: Office) => {
    const response = await fetch('http://localhost:8000/api/offices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(office),
    });

    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Office;
  }

  // PUT /api/offices/:id
  const updateOffice = async (office: Office) => {
    const response = await fetch(`http://localhost:8000/api/offices/${office.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(office),
    });

    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Office;
  }

  // DELETE /api/offices/:id
  const deleteOffice = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/offices/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) { // not using checkResponse here because we don't need the data
      setError('An error occured.');
      return false;
    }

    return true;
  }

  return { getOffices, getOffice, createOffice, updateOffice, deleteOffice, error };
}
