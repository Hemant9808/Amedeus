import  { Dispatch, useState } from 'react';
import { LocalizationProvider, DatePicker, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';

interface Props{
  dateValue: Date | null;
  onChange: any;
}

const CustomDatePickerReturn = ({dateValue, onChange}: Props) => {
  const [value, setValue] = useState<Date | null>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue);
  };

 

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col items-center mt-10">
        <TextField
          label="Departure"
          value={dateValue ? dateValue.toDateString() : ''}
          onClick={()=> {handleToggle;handleDateChange(dateValue)}}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleToggle}>
                <CalendarTodayIcon />
              </IconButton>
            ),
          }}
        />
        {open && (
          <Box className="absolute mt-2 bg-white p-4 rounded shadow-lg z-10">
            <Stack direction="row" justifyContent="space-between">
              <DatePicker
                value={dateValue}
                onChange={(date) => onChange(date)}
                renderInput={(params) => <TextField {...params} />}
                 //@ts-ignore
                renderDay={(day: Date, _value: Date | null, DayComponentProps: PickersDayProps<Date>) => (
                  <PickersDay {...DayComponentProps} />
                )}
              />
              <IconButton onClick={handleToggle}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={2} className="mt-4">
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Set dates</Button>
            </Stack>
          </Box>
        )}
      </div>
    </LocalizationProvider>
  );
};
const CustomDatePickerDeparture = ({dateValue, onChange}: Props) => {
  const [value, setValue] = useState<Date | null>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col items-center mt-10">
        <TextField
          label="Return"
          value={dateValue ? dateValue.toDateString() : ''}
          onClick={handleToggle}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleToggle}>
                <CalendarTodayIcon />
              </IconButton>
            ),
          }}
        />
        {open && (
          <Box className="absolute mt-2 bg-white p-4 rounded shadow-lg z-10">
            <Stack direction="row" justifyContent="space-between">
              <DatePicker
               value={dateValue}
               onChange={(date) => onChange(date)}
                renderInput={(params) => <TextField {...params} />}
                 //@ts-ignore
                renderDay={(day: Date, _value: Date | null, DayComponentProps: PickersDayProps<Date>) => (
                  <PickersDay {...DayComponentProps} />
                )}
              />
              <IconButton onClick={handleToggle}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={2} className="mt-4">
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Set dates</Button>
            </Stack>
          </Box>
        )}
      </div>
    </LocalizationProvider>
  );
};

export  {CustomDatePickerDeparture,CustomDatePickerReturn};
