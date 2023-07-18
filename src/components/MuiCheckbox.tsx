import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material'

const MuiCheckbox = () => {

    const [acceptTerms, setAcceptTerms] = useState(false);
    const [skills, setSKills] = useState<string[]>([]);

    // console.log({acceptTerms});
    console.log({skills });

    const onTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTerms(event.target.checked);
    };
    
    const onSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        // if index is not present
        if (index === - 1) {
            setSKills([...skills, event.target.value]); 
        } else {
            setSKills(skills.filter(skill => skill !== event.target.value));
        }
    };

  return (
    <Box>
        <Box>
            <FormControlLabel 
                label="I accept terms and conditions" 
                control={<Checkbox size="small" color='success' checked={acceptTerms} onChange={onTermsChange} />} 
            />
        </Box>

        <Box>
            <Checkbox 
                checked={acceptTerms}
                onChange={onTermsChange}
                icon={<BookmarkBorderIcon />} 
                checkedIcon={<BookmarkIcon />} 
            />
        </Box>

        <Box>
             <FormControl error>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label="HTML" 
                        control={<Checkbox value="html" checked={skills.includes("html")} onChange={onSkillsChange} />} 
                    />
                    <FormControlLabel 
                        label="CSS" 
                        control={<Checkbox value="css" checked={skills.includes("css")} onChange={onSkillsChange} />} 
                    />
                    <FormControlLabel 
                        label="JavaScript" 
                        control={<Checkbox value="javascript" checked={skills.includes("javascript")} onChange={onSkillsChange} />} 
                    />
                </FormGroup>
                <FormHelperText>Invalid selection</FormHelperText>
             </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox