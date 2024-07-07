import  { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocationCityIcon from '@mui/icons-material/LocationCity';


interface LocationInputFromProps {
  setOrigin: (value: string) => void;
  origin: string;
  
}
interface LocationInputToProps {
  
  setDestination: (value: string) => void;
  destination: string;
}

const LocationInputFrom: React.FC<LocationInputFromProps> = ({ setOrigin, origin }) => {
  const [value, setValue] = useState(null);
  const [autoComplete, setAutoComplete] = useState([]);

 console.log("autoComplete",autoComplete);


const searchCity = async (keyword:string) => {
  try {
    const response = await axios.get(
      `https://flightbookingbackend-l0z8.onrender.com/citySearch?keyword=${keyword}`,
    );
    console.log(response.data.data);
    setAutoComplete(response.data.data);
  } catch (error) {
    console.error('Error fetching flight data:', error);
  }
};
const getIcon = (subType:string) => {
  switch (subType) {
    case 'LOCATION':
      return <LocationOnIcon />;
    case 'AIRPORT':
      return <AirplanemodeActiveIcon />;
    case 'CITY':
      return <LocationCityIcon />;
    default:
      return null;
  }
};
 
  return (
    <div className="flex justify-center w-[15rem] mt-10">
     
     <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        // @ts-ignore
        console.log(newValue);
        console.log("newValue.geoCode.iataCode",newValue.iataCode);
        if (newValue  && newValue.iataCode) {
          console.log("newValue.geoCode.iataCode",newValue.iataCode);
          
          setOrigin(newValue.iataCode);
          console.log("origin:",origin);
           // Set the iataCode into the state
        }
        
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        searchCity(newInputValue);
      }}
      options={autoComplete}
      getOptionLabel={(option:any) => option.name}
      renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
      renderOption={(props, option) => (
        <li {...props}>
          <div className="flex flex-col">
            <div className=' flex gap-5'>
            {getIcon(option.subType)}
              <span>{option.name}</span>
              </div>
            
               </div>
        </li>
      )}
      className="w-80"
    />
     
     
      {/* <Autocomplete 
        value={value}
        onChange={( newValue) => {
          //@ts-ignore
          setValue(newValue);
        }}
        options={locations}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
        renderOption={(props, option) => (
          <li {...props}>
            <div className="flex flex-col">
              <span>{option.title}</span>
              {option.distance && <span className="text-gray-500 text-sm">{option.distance}</span>}
            </div>
          </li>
        )}
        className="w-80"
      /> */}
    </div>
  );
}

const LocationInputTo: React.FC<LocationInputToProps> = ({ setDestination, destination }) => {  const [value, setValue] = useState(null);
  const [autoComplete, setAutoComplete] = useState([]);

 console.log("autoComplete",autoComplete);


const searchCity = async (keyword:string) => {
  try {
    const response = await axios.get(
      `https://flightbookingbackend-l0z8.onrender.com/citySearch?keyword=${keyword}`,
    );
    console.log(response.data.data);
    setAutoComplete(response.data.data);
  } catch (error) {
    console.error('Error fetching flight data:', error);
  }
};
const getIcon = (subType:string) => {
  switch (subType) {
    case 'LOCATION':
      return <LocationOnIcon className='w-4' />;
    case 'AIRPORT':
      return <AirplanemodeActiveIcon className='w-[0.2rem]' />;
    case 'CITY':
      return <LocationCityIcon />;
    default:
      return null;
  }
};



 
  return (
    <div className="flex justify-center w-[15rem] mt-10">
     
     <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        // @ts-ignore
        console.log(newValue);
        console.log("newValue.geoCode.iataCode",newValue.iataCode);
        if (newValue  && newValue.iataCode) {
          console.log("newValue.geoCode.iataCode",newValue.iataCode);
          
          setDestination(newValue.iataCode);
          console.log("setDestination:",destination);
           // Set the iataCode into the state
        }
        
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        searchCity(newInputValue);
      }}
      options={autoComplete}
     
      getOptionLabel={(option:any) => option.name}
      renderInput={(params) => <TextField {...params} label="To" variant="outlined" />}
      renderOption={(props, option) => (
        <li {...props}>
          <div className="flex flex-col">
            <div className=' flex gap-5'>
              <div className=''>  {getIcon(option.subType)}</div>
          
              <span className='text-[0.95rem]'>{option.name}</span>
              </div>
            
               </div>
        </li>
      )}
      className="w-80"
    />
     
     
      {/* <Autocomplete 
        value={value}
        onChange={( newValue) => {
          //@ts-ignore
          setValue(newValue);
        }}
        options={locations}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
        renderOption={(props, option) => (
          <li {...props}>
            <div className="flex flex-col">
              <span>{option.title}</span>
              {option.distance && <span className="text-gray-500 text-sm">{option.distance}</span>}
            </div>
          </li>
        )}
        className="w-80"
      /> */}
    </div>
  );
}
export {LocationInputFrom,LocationInputTo};
