import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Execises';
import SearchExercises from '../components/SearchExercises';
import Herobanner from '../components/Herobanner';

const Home = () => {
    return (
        <Box>
        <Herobanner/>
        <SearchExercises/>
        <Exercises/>
        </Box>
    )
}

export default Home;