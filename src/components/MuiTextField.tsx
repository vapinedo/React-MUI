import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Stack, TextField, InputAdornment } from '@mui/material'

const MuiTextField = () => {

  const [value, setValue] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(true);

  const onVisibilityChange = () => {
    setVisibility(prevState => !prevState);
  };
   
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" color='secondary' size='small' />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField 
          label="Form Input" 
          required value={value} 
          onChange={e => setValue(e.target.value)} 
          error={!value}
          helperText={!value ? "Required" : "Do not share your password with anyone"}
        />
        <TextField type='password' label="Password" disabled helperText="Do not share your password with anyone" />
        <TextField type='password' label="Read Only" InputProps={{ readOnly: true }}  helperText="Do not share your password with anyone" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField 
          label="Amount" 
          InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }} 
        />
        <TextField 
          label="Weight" 
          InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }}
        />
        <TextField 
          label="Weight" 
          type={visibility ? "password" : "text" }
          InputProps={{ 
            endAdornment: <InputAdornment position='end' onClick={onVisibilityChange}><VisibilityIcon /></InputAdornment> 
          }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField