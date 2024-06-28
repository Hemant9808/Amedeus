import React from 'react';
import 'tailwindcss/tailwind.css';

const BookingCheck: React.FC = () => {
  return (
    <div className="flex items-center">
      <input type="checkbox" id="booking-check" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
      <label htmlFor="booking-check" className="ml-2 text-gray-700">
        Check accommodation with <a href="https://www.booking.com" className="text-blue-700 font-semibold">Booking.com</a>
      </label>
    </div>
  );
}


export default BookingCheck;
