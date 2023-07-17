import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiSelect = () => {

    // const [country, setCountry] = useState("");
    const [countries, setCountries] = useState<string[ ]>([]);

    console.log({countries});

    const onCountryChange = (event: React.ChangeEvent<HTMLInputElement >) => {
        const rawValue = event.target.value;
        const newValue = typeof rawValue === "string" 
            ? rawValue.split(",") 
            : rawValue;
        setCountries(newValue);
    };
    
  return (
    <Box width="250px">
        <TextField 
            fullWidth
            label="Select Country" 
            select value={countries} 
            onChange={onCountryChange} 
            SelectProps={{multiple: true}}
            size="small"
            color="secondary"
            helperText="Please select your country"
            error
        >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect