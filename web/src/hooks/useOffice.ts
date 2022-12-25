import { useState } from 'react';
import { Office } from '@/types/Office';


export const useOffice = () => {
  const [error, setError] = useState('');

  // TODO: refactor: create return error function

  // GET /api/offices
  const getOffices = async () => {
    const response = await fetch('http://localhost:8000/api/offices');
    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    return data as Office[];
  }

  // GET /api/offices/:id
  const getOffice = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/offices/${id}`);
    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

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

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

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

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    return data as Office;
  }

  // DELETE /api/offices/:id
  const deleteOffice = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/offices/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      setError('An error occured.');
      return false;
    }

    return true;
  }

  return { getOffices, getOffice, createOffice, updateOffice, deleteOffice, error };
}
