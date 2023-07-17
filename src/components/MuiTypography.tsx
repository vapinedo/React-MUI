import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component="h1" gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>

        <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum necessitatibus error quidem, modi eos sequi ipsam aliquid ratione, libero, voluptates harum. Sed fugiat sapiente eum vitae animi nisi non.
        </Typography>
        <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempora temporibus facilis voluptate accusamus quae, libero reprehenderit voluptas similique illum unde iusto atque saepe, eius eum optio consequuntur autem dolorum.
        </Typography>
    </div>
  )
}

export default MuiTypography