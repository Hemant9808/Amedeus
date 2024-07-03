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

  const [data, setData] = useState([]);
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
        "https://kiu.onrender.com/flights/query",
        data
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const phoneNumber = "9013977822";

  return (
    <div className="bg-gray-100 min-h-screen  w-[100vw] flex flex-col justify-start py-[5rem] items-center gap-4">
      <div className="bg-white w-[80%] h-[30%] flex flex-col items-between justify-between p-3 ">
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
        <div className="flex  mt-5 justify-end">
          <BookingCheck></BookingCheck>
        </div>
      </div>

      {/* {
      data!== undefined && data && <AllFlightCard data = {data}></AllFlightCard>
    } */}
     {
      data!== undefined && data.length > 0 ? (<AllFlightCard data = {data}></AllFlightCard>):"Data not Found"
    }

<div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Call {phoneNumber}
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded p-4 shadow-lg text-center">
            <p className="mb-4">Call {phoneNumber}?</p>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Call
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
