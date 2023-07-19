import React from 'react'
import { Box, Card, CardContent, CardActions, CardMedia, Button,  Typography } from '@mui/material'

const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia
                height="140"
                component="img"
                alt="Unsplash image"
                image="https://source.unsplash.com/random"
            />
            <CardContent>
                <Typography gutterBottom variant='h6' component="div">React</Typography>
                <Typography variant='body2' color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus qui, autem sint maiores esse ad soluta nesciunt, nobis ullam a sunt rerum quis hic praesentium laboriosam cumque provident natus?
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size="small">Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard