import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import BannerImage from '../assets/images/Banner.jpg'

const Herobanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        }} position="relative" p="20px">
            <Typography mb={2} color='#FF2625' fontWeight="600" fontSize="32px">
                Tren Tech
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}}>
                Test of 10 men, width of 3, <br/> and height 1.
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={3}>
                Be swole with our work out split.
            </Typography>
            <Button variant='contained'
               color='error' href='#exercises' sx={{ backgroundColor: '#ff2625', padding: '10px'}}>
                Get Huge
            </Button>
            <Typography 
                fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize={200}
                >
                    Workout
                </Typography>
            <img src={BannerImage} alt='Banner' className="hero-banner-img" />
        </Box>
    )
}

export default Herobanner;