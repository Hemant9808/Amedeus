


import React, { useState } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, Checkbox, Radio, RadioGroup, FormLabel, OutlinedInput, } from '@mui/material';


interface TravelClassDropdownProps {

  setTravelClass: React.Dispatch<React.SetStateAction<string>>;
  travelClass:string
}

const TravelClassDropdown: React.FC<TravelClassDropdownProps> = ({travelClass, setTravelClass }) => {
  
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
          label="Travel Class"
          value={travelClass}
          onChange={handleClassChange}
          onClick={toggleDropdown}
          readOnly
          input={<OutlinedInput notched={false} />}
          // endIcon={
          //   <AddIcon onClick={toggleDropdown} />
          // }
        >
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="Premium Economy">Premium Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
          <MenuItem value="First Class">First Class</MenuItem>
        </Select>
      </FormControl>
      {isOpen && (
        <div className="absolute top-12 left-0 p-4 bg-white rounded shadow-md w-64 z-10">
          <FormControl component="fieldset">
            <FormLabel component="legend">Travel Class</FormLabel>
            <RadioGroup
              aria-label="travel class"
              name="travelClass"
              value={travelClass}
              onChange={handleClassChange}
            >
              <FormControlLabel value="Economy" control={<Radio />} label="Economy" />
              <FormControlLabel value="Premium Economy" control={<Radio />} label="Premium Economy" />
              <FormControlLabel value="Business" control={<Radio />} label="Business" />
              <FormControlLabel value="First Class" control={<Radio />} label="First Class" />
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

export default TravelClassDropdown;


