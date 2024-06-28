import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PersonIcon from '@mui/icons-material/Person';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LuggageIcon from '@mui/icons-material/Luggage';

const PassengerSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinBags, setCabinBags] = useState(0);
  const [checkedBags, setCheckedBags] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  const handleDecrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[20rem] ">
      <TextField
      className="relative h-[30px] "
        label="Passengers"
        variant="outlined"
        onClick={toggleDropdown}
        value={`Adults: ${adults}, Children: ${children}, Infants: ${infants}`}
        fullWidth
        InputProps={{
          readOnly: true,
          endAdornment: (
            <IconButton size="small" onClick={toggleDropdown}>
              {isOpen ? <RemoveIcon /> : <AddIcon />}
            </IconButton>
          ),
        }}
      />
      {isOpen && (
        <div className="absolute top-12 right-0 p-4 bg-white rounded shadow-md w-64 z-10">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <PersonIcon />
                <span className="ml-2">Adults</span>
              </div>
              <div className="flex items-center">
                <IconButton size="small" onClick={() => handleDecrement(setAdults, adults)}>
                  <RemoveIcon />
                </IconButton>
                <span>{adults}</span>
                <IconButton size="small" onClick={() => handleIncrement(setAdults, adults)}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <ChildCareIcon />
                <span className="ml-2">Children</span>
              </div>
              <div className="flex items-center">
                <IconButton size="small" onClick={() => handleDecrement(setChildren, children)}>
                  <RemoveIcon />
                </IconButton>
                <span>{children}</span>
                <IconButton size="small" onClick={() => handleIncrement(setChildren, children)}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <BabyChangingStationIcon />
                <span className="ml-2">Infants</span>
              </div>
              <div className="flex items-center">
                <IconButton size="small" onClick={() => handleDecrement(setInfants, infants)}>
                  <RemoveIcon />
                </IconButton>
                <span>{infants}</span>
                <IconButton size="small" onClick={() => handleIncrement(setInfants, infants)}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <WorkOutlineIcon />
                <span className="ml-2">Cabin baggage</span>
              </div>
              <div className="flex items-center">
                <IconButton size="small" onClick={() => handleDecrement(setCabinBags, cabinBags)}>
                  <RemoveIcon />
                </IconButton>
                <span>{cabinBags}</span>
                <IconButton size="small" onClick={() => handleIncrement(setCabinBags, cabinBags)}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <LuggageIcon />
                <span className="ml-2">Checked baggage</span>
              </div>
              <div className="flex items-center">
                <IconButton size="small" onClick={() => handleDecrement(setCheckedBags, checkedBags)}>
                  <RemoveIcon />
                </IconButton>
                <span>{checkedBags}</span>
                <IconButton size="small" onClick={() => handleIncrement(setCheckedBags, checkedBags)}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;
