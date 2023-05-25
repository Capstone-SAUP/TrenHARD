import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


const SearchExercises = () => {
    const [search, setSearch] = useState('')

    const handleSearch = async () => {
        if(search) {
           //const exercisesData = await fetchData();
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Workouts You Should Try.
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: '590px', xs: '130px'},
          }}
          height="74px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search"
          type="text"
        />
      <Button className="search-btn"
      sx={{ bgcolor: '#700f0f',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '140px', xs: '60px'},
            fontSize: { lg: '16px', xs: '12px'}
            ,
            height: '56px',
            position:"absolute", 
            right:'0'
        }}
        onClick={handleSearch}
            >
        Search
      </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
