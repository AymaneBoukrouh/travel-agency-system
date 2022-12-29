import { useState } from 'react';
import { Booking } from '@/types/Booking';


const checkResponse = async (response: Response, setError: callable) => {
  const data = await response.json();

  if (!response.ok) {
    setError(data.message);
    return false;
  }

  return data;
}


export const useBooking = () => {
  const [error, setError] = useState('');

  // GET /api/bookings
  const getBookings = async () => {
    const response = await fetch('http://localhost:8000/api/bookings');
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Booking[];
  }

  // GET /api/bookings/:id
  const getBooking = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/bookings/${id}`);
    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Booking;
  }

  // POST /api/bookings
  const createBooking = async (booking: Booking) => {
    const response = await fetch('http://localhost:8000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(booking),
    });

    const data = await checkResponse(response, setError);

    if (!data) return;
    return data as Booking;
  }

  // DELETE /api/bookings/:id
  const deleteBooking = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/bookings/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) { // not using checkResponse here because we don't need the data
      setError('An error occured.');
      return false;
    }

    return true;
  }

  return { getBookings, getBooking, createBooking, deleteBooking, error };
}
