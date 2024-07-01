import {  useState } from "react";

import "./App.css";
import TravelClassDropdown from "./BussinessInput";



import PassengerSelector from "./Passenger";
import { CustomDatePickerDeparture, CustomDatePickerReturn } from "./DateInput";
import BookingCheck from "./BookingCkeck";
import TravelMode from "./TravelMode";
import { TextField } from "@mui/material";

import axios from "axios";
import AllFlightCard from "./Allflights";

function App() {

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [totalPassenger, setTotalPassenger] = useState(0);
  const [travelClass, setTravelClass] = useState("Business");
  const [travelMode, setTravelMode] = useState('One Way');

  const [data, setData] = useState();
  const [departureDate, setDepartureDate] = useState(new Date());
  
  const fetchFlightData = async () => {
    const data = {
      from: "SDQ",
      to: "CCS",
      departureDate,
      cabinPref: travelClass,
      passengerQuantity: totalPassenger.toString(),
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/flights/query",
        data
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };
  

  return (
    <div className="bg-gray-100  w-[100vw] flex flex-col justify-center items-center gap-4">
      <div className="bg-white w-[80%] h-[30%] mt-[120px] flex flex-col items-between justify-between p-3 ">
        <div className=" flex  items-center justify-between ">
          <div className="flex gap-3">
            <TravelMode travelMode={travelMode} setTravelMode={setTravelMode}></TravelMode>

            <TravelClassDropdown  travelClass={travelClass} setTravelClass={setTravelClass} ></TravelClassDropdown>
          </div>
          <PassengerSelector
            totalPassenger={totalPassenger}
            setTotalPassenger={setTotalPassenger}
          ></PassengerSelector>
        </div>
        <div className="flex items-end justify-between ">
          <TextField
            id="outlined-basic"
            label="Origin"
            variant="outlined"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <CustomDatePickerDeparture dateValue={departureDate} onChange={setDepartureDate}></CustomDatePickerDeparture>
          <CustomDatePickerReturn  dateValue={departureDate} onChange={setDepartureDate}></CustomDatePickerReturn>
          <div className="items-end flex justify-between mb-2 ">
            <button className="bg-teal-500 text-white py-3 px-6 rounded transition transform hover:bg-teal-600 active:bg-teal-700 active:scale-95"
    onClick={fetchFlightData}>
              Explore
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <BookingCheck></BookingCheck>
        </div>
      </div>

      {
      data!== undefined && data && <AllFlightCard data = {data}></AllFlightCard>
    }
    </div>
  );
}

export default App;
