import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

type Skill = {
    id: number,
    label: string
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}));

const MuiAutocomplete = () => {

    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);
    
    console.log({skill});

  return (
    <Stack spacing={2} width="250px">
        <Autocomplete 
            freeSolo  
            value={value}
            options={skills} 
            onChange={(event: any, newValue: string | null) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} label="Skills" />} 
        />

        <Autocomplete 
            value={skill}
            options={skillsOptions} 
            onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
            renderInput={(params) => <TextField {...params} label="Skills" />} 
        />
    </Stack>
  )
}

export default MuiAutocomplete