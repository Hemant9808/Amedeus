


import React, { useEffect, useRef, useState } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup, FormLabel, OutlinedInput, } from '@mui/material';
import useClickOutside from './utils/closeDropDown';


interface TravelModeProps {

  setTravelMode: React.Dispatch<React.SetStateAction<string>>;
  travelMode:string
}

const TravelMode: React.FC<TravelModeProps> = ({travelMode,setTravelMode}) => {
  const [travelClass, setTravelClass] = useState();
  const [mixedClasses, setMixedClasses] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClassChange = (event:any) => {
    setTravelMode(event.target.value);
    console.log(travelClass);
    
    console.log(event.target.value);
    
  };

  const handleMixedClassesChange = (event:any) => {
    setMixedClasses(event.target.checked);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));
  return (
    <div className="relative w-[15rem] " ref={dropdownRef}>
      <FormControl fullWidth >
        <Select
        className='border-white h-[30px]'
          label="Travel Mode"
          value={travelMode}
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
              value={travelMode}
              onChange={handleClassChange}
            >
              <FormControlLabel value="Return" control={<Radio />} label="Return" />
              <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
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
