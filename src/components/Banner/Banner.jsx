import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import '../Banner/banner.scss'
function Banner({ coverPhoto, title, subTitle, searchInput, bannerHeight }) {
    return (
        <section id='banner' style={{ backgroundImage: `url("${coverPhoto}")`,  height: bannerHeight}}>
            <div className="section-over">
                <div className="banner-text">
                    <h5>{subTitle}</h5>
                    <h1>{title}</h1>
                </div>
                {
                    searchInput ?
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
                            <TextField style={{ width: "100%" }} id="outlined-basic" label="Outlined" variant="outlined" />
                            <Button variant="contained">Contained</Button>
                        </FormControl>
                    </div> : <></>
                }

            </div>
        </section>
    )
}

export default Banner