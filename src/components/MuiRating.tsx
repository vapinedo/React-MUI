import React, { useState } from 'react'
import { Rating, Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {

    const [value, setValue] = useState<number | null>(3);

    console.log({value});

    const onRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    };
    
  return (
    <Stack spacing={2}>
        <Rating 
            // readOnly
            size="large"
            value={value} 
            precision={0.5}
            highlightSelectedOnly 
            onChange={onRatingChange} 
            icon={<FavoriteIcon fontSize="inherit" color='error' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        /> 
    </Stack>
  )
}

export default MuiRating