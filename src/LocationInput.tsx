import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const locations = [
  { title: 'Patna, India', distance: '0 km away' },
  { title: '250 km around Patna', distance: '' },
  { title: 'Kathmandu, Nepal', distance: '237 km away' },
  { title: 'Gaya, India', distance: '90 km away' },
  { title: 'Darbhanga, India', distance: '99 km away' },
  { title: 'Varanasi, India', distance: '219 km away' }
];

export function LocationInputFrom() {
  const [value, setValue] = useState(null);

  return (
    <div className="flex justify-center w-[15rem] mt-10">
      <Autocomplete 
        value={value}
        onChange={(event, newValue) => {
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
      />
    </div>
  );
}

export  function LocationInputTo() {
  const [value, setValue] = useState(null);

  return (
    <div className="flex w-[15rem] justify-center mt-10">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={locations}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="To" variant="outlined" />}
        renderOption={(props, option) => (
          <li {...props}>
            <div className="flex flex-col">
              <span>{option.title}</span>
              {option.distance && <span className="text-gray-500 text-sm">{option.distance}</span>}
            </div>
          </li>
        )}
        className="w-80"
      />
    </div>
  );
}
