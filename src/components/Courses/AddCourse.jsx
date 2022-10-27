import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

function AddCourse() {
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <div>
            <Grid container width="60%" margin="auto">
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" label="Course name" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" label="Course description" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" label="Course photo url" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" label="Course price" variant="outlined" fullWidth />
                </Grid>

                <Box container width="67%" margin="auto" marginTop="50px">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>C#</MenuItem>
                            <MenuItem value={2}>Java</MenuItem>
                            <MenuItem value={3}>Python</MenuItem>
                            <MenuItem value={4}>MERN</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
            </Grid>

        </div>
    )
}

export default AddCourse