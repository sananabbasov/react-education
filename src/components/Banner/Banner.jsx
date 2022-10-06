import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import '../Banner/banner.scss'
function Banner() {
    return (
        <section id='banner' style={{ backgroundImage: `url("https://comparassetsource.s3.amazonaws.com/media/blog/article/pexels-thisisengineering-3861951.jpg")` }}>
            <div className="section-over">
                <div className="banner-text">
                    <h5>Learn From Home</h5>
                    <h1>Education Courses</h1>
                </div>
                <div className='banner-search'>
                    <FormControl className='search-form' fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="10"
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <TextField style={{width:"100%"}} id="outlined-basic" label="Outlined"  variant="outlined" />
                        <Button variant="contained">Contained</Button>
                    </FormControl>
                </div>
            </div>
        </section>
    )
}

export default Banner