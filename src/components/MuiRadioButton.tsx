import React, { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'

const MuiRadioButton = () => {

    const [value, setValue] = useState("");

    console.log({value}); 

    const onExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value); 
    };
    
  return (
    <Box>
        <FormControl error>
            <FormLabel id="job-experience-group-label">Years of Experience</FormLabel>
            <RadioGroup
                row
                value={value} 
                name="job-experience-group" 
                onChange={onExperienceChange}
                aria-label="job-experience-group-label" 
            >
                <FormControlLabel control={<Radio size='small' />} label="0-2" value="0-2" />
                <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
                <FormControlLabel control={<Radio color="warning" />} label="6-10" value="6-10" /> 
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton