import { useState } from 'react';
import { Trip } from '@/types/Trip';


const checkResponse = async (response: Response, setError: callable) => {
  const data = await response.json();

  if (!response.ok) {
    setError(data.message);
    return false;
  }

  return data;
}


export const useTrip = () => {
  const [error, setError] = useState('');

  // GET /api/trips
  const getTrips = async () => {
    const response = await fetch('http://localhost:8000/api/trips');
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Trip[];
  }

  // GET /api/trips/:id
  const getTrip = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/trips/${id}`);
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Trip;
  }

  // POST /api/trips
  const createTrip = async (trip: Trip) => {
    const response = await fetch('http://localhost:8000/api/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trip),
    });

    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Trip;
  }

  // PUT /api/trips/:id
  const updateTrip = async (trip: Trip) => {
    const response = await fetch(`http://localhost:8000/api/trips/${trip.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trip),
    });

    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Trip;
  }

  // DELETE /api/trips/:id
  const deleteTrip = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/trips/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) { // not using checkResponse here because we don't need the data
      setError('An error occured.');
      return false;
    }

    return true;
  }

  return { getTrips, getTrip, createTrip, updateTrip, deleteTrip, error };
}
