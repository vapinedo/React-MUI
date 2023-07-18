import { Box } from '@mui/material'
import React from 'react'

const MuiLayout = () => {
  return (
    <>
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
    </>
  )
}

export default MuiLayout