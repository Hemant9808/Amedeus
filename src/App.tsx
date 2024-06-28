import { useState } from 'react'

import './App.css'
import TravelClassDropdown from './BussinessInput'

import DatePickerInput from './Date'
import { LocationInputTo,LocationInputFrom } from './LocationInput'
import PassengerSelector from './Passenger'
import { CustomDatePickerDeparture, CustomDatePickerReturn } from './DateInput'
import BookingCheck from './BookingCkeck'
import TravelMode from './TravelMode'


function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };

  return (
    <div className='bg-gray-100  w-[100vw] h-screen flex justify-center items-start'>
    <div className='bg-white w-[80%] h-[30%] mt-[120px] flex flex-col items-between justify-between p-3 ' >
      <div className=' flex  items-center justify-between '>
        <div className='flex gap-3'>
        <TravelMode></TravelMode>

      <TravelClassDropdown  ></TravelClassDropdown>
      </div>
      <PassengerSelector></PassengerSelector>
      </div>
      <div className='items-center flex justify-between '>
      <LocationInputFrom ></LocationInputFrom>
      <LocationInputTo></LocationInputTo>
     
    <CustomDatePickerDeparture></CustomDatePickerDeparture>  
    <CustomDatePickerReturn></CustomDatePickerReturn> 
    <div className='items-end flex justify-between mt-8 ' > 
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
    </div>
  )
}

export default App
