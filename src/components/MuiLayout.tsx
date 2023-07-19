import React from 'react'
import { Box, Stack, Divider, Grid } from '@mui/material'

const MuiLayout = () => {
  return (
    <>
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

        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={6}>
                <Box bgcolor="primary.light" p={2}>Item 1</Box>
            </Grid>

            <Grid item xs={6}>
                <Box bgcolor="primary.light" p={2}>Item 2</Box>
            </Grid>

            <Grid item xs={6}>
                <Box bgcolor="primary.light" p={2}>Item 3</Box>
            </Grid>

            <Grid item xs={6}>
                <Box bgcolor="primary.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
    </>
  )
}

export default MuiLayout