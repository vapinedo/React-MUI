import React, { useState } from 'react'
import { Box, FormControlLabel, Switch, FormControl, FormLabel, FormGroup } from '@mui/material'

const settingsInitialState = {
    "allowSpectators": true,
    "streamerMode": false,
    "ads": true
};

const MuiSwitch = () => {

    const [checked, setChecked] = useState(false);
    const [settings, setSettings] = useState(settingsInitialState);

    // console.log({checked});
    console.log({settings});

    const onCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    
    const onSettingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };
    
  return (
    <Box>
        <Box>
            <FormControlLabel 
                label="Dark Mode"
                control={<Switch checked={checked} onChange={onCheckedChange} size="small" color='success' />} 
            />
        </Box>

        <Box>
            <FormLabel>Settings</FormLabel>
            <FormGroup>
                <FormControlLabel 
                    label="Allow Spectators"
                    control={<Switch value={true} onChange={onSettingsChange} />}
                />
                <FormControlLabel 
                    label="Streamer mode"
                    control={<Switch value={false} onChange={onSettingsChange} />}
                />
                <FormControlLabel 
                    label="ADS"
                    control={<Switch value={true} onChange={onSettingsChange} />}
                />
            </FormGroup>
        </Box>
    </Box>
  )
}

export default MuiSwitch