import { useState } from 'react'

import './App.css'
import TravelClassDropdown from './BussinessInput'

import DatePickerInput from './Date'
import { LocationInputTo,LocationInputFrom } from './LocationInput'
import PassengerSelector from './Passenger'
import { CustomDatePickerDeparture, CustomDatePickerReturn } from './DateInput'
import BookingCheck from './BookingCkeck'
import TravelMode from './TravelMode'
import { TextField } from '@mui/material'
import FlightCard from './FlightCards'
import axios from 'axios';
import AllFlightCard from './Allflights'

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };
  const fetchFlightData = async () => {
    const data = {
      "from":"SDQ",
      "to":"CCS",
      "cabinPref":"Economy",
      "passengerQuantity":"1"
  }
  
    try {
      const response = await axios.post('http://localhost:8000/flights/query', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };
  fetchFlightData();


  return (
    <div className='bg-gray-100  w-[100vw] flex flex-col justify-center items-center gap-4'>
    <div className='bg-white w-[80%] h-[30%] mt-[120px] flex flex-col items-between justify-between p-3 ' >
      <div className=' flex  items-center justify-between '>
        <div className='flex gap-3'>
        <TravelMode></TravelMode>

      <TravelClassDropdown  ></TravelClassDropdown>
      </div>
      <PassengerSelector></PassengerSelector>
      </div>
      <div className='flex items-end justify-between '>
      <TextField
        id="outlined-basic"
        label="Origin"
        variant="outlined"
        value={origin}
        onChange={(e)=>setOrigin(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Destination"
        variant="outlined"
        value={destination}
        onChange={(e)=>setDestination(e.target.value)}
      />
      {/* <LocationInputFrom ></LocationInputFrom> */}
      {/* <LocationInputTo></LocationInputTo> */}
     
    <CustomDatePickerDeparture></CustomDatePickerDeparture>  
    <CustomDatePickerReturn></CustomDatePickerReturn> 
    <div className='items-end flex justify-between mb-2 ' > 
    <button className="bg-teal-500 text-white py-3 px-6 rounded transition transform hover:bg-teal-600 active:bg-teal-700 active:scale-95">
      Explore
    </button>
    </div>
    </div>
    <div className='flex justify-end'>
      <BookingCheck></BookingCheck>
    </div>
    {/* <DatePickerInput value={selectedDate} onChange={handleDateChange} /> */}
    </div>
    {/* <FlightCard></FlightCard> */}
    <AllFlightCard></AllFlightCard>
    </div>
  )
}

export default App
