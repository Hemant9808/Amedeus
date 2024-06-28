


import React, { useState } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup, FormLabel, OutlinedInput, } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const TravelMode= () => {
  const [travelClass, setTravelClass] = useState('One Way');
  const [mixedClasses, setMixedClasses] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClassChange = (event:any) => {
    setTravelClass(event.target.value);
  };

  const handleMixedClassesChange = (event:any) => {
    setMixedClasses(event.target.checked);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[15rem]  ">
      <FormControl fullWidth >
        <Select
        className='border-white h-[30px]'
          label="Travel Mode"
          value={travelClass}
          onChange={handleClassChange}
          onClick={toggleDropdown}
          readOnly
          input={<OutlinedInput notched={false} />}
          // endIcon={
          //   <AddIcon onClick={toggleDropdown} />
          // }
        >
          <MenuItem value="Return">Return</MenuItem>
          <MenuItem value="One Way">One Way</MenuItem>
          <MenuItem value="Multi-City">Multi-City</MenuItem>
          <MenuItem value="Nomad">Nomad</MenuItem>
        </Select>
      </FormControl>
      {isOpen && (
        <div className="absolute top-12 left-0 p-4 bg-white rounded shadow-md w-64 z-10">
          <FormControl component="fieldset">
            <FormLabel component="legend">Travel Mode</FormLabel>
            <RadioGroup
              aria-label="travel class"
              name="travelClass"
              value={travelClass}
              onChange={handleClassChange}
            >
              <FormControlLabel value="Return" control={<Radio />} label="Return" />
              <FormControlLabel value="One Way " control={<Radio />} label="One Way" />
              <FormControlLabel value="Multi-City" control={<Radio />} label="Multi-City" />
              <FormControlLabel value="Nomad" control={<Radio />} label="Nomad" />
            </RadioGroup>
            <FormControlLabel
              control={<Checkbox checked={mixedClasses} onChange={handleMixedClassesChange} />}
              label="Apply mixed classes"
            />
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default TravelMode;
