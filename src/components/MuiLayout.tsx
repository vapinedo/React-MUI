import React from 'react'
import { Box, Stack, Divider } from '@mui/material'

const MuiLayout = () => {
  return (
    <Stack 
        spacing={2}
        direction="row" 
        divider={<Divider flexItem orientation='vertical' />}
        sx={{ border: "1px solid" }} 
    >
        <Box 
            // component="span" 
            sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
                backgroundColor: "primary.light" 
            }
        }}>
            Valp TV
        </Box>

        <Box 
            p={2}
            width="100px" 
            height="100px" 
            display="flex" 
            bgcolor="success.light" 
        >

        </Box>
    </Stack>
  )
}

export default MuiLayout