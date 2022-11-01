import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function AddCourse() {
    const [category, setCategory] = useState('');
    const [contentName, setContentName] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [courseContents, setCourseContents] = useState([])
    const [contentsCount, setContentsCount] = useState([1]);
    const [check, setCheck] = useState(false)

    const handleChange = (event) => {
        setCategory(event.target.value);
    };


    const addContentHandeler = () => {
        let content = contentsCount;
        content.push(1)
        setContentsCount(content)
        setCheck(!check)
    }

    const createLessons = (index) => {
        let data = [
            {
                "lessonName": `${lessonName}`,
                "videoUrl": `${videoUrl}`
            }
        ]
        setCourseContents([...courseContents,...data])
    }

    console.log(courseContents)


    useEffect(() => {
    }, [check])
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

                    <Button variant="contained" onClick={() => addContentHandeler()}>Add chapter</Button>
                    {
                        contentsCount.map((x, index) => (
                            <Accordion key={index} marginTop="50px">
                                <AccordionSummary
                                    expandIcon={""}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Course content {index + 1}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Grid item lg="12" margin="auto" marginTop="10px">
                                            <TextField id="outlined-basic" onChange={(e) => setContentName(e.target.value)} label="Chapter name" variant="outlined" fullWidth />
                                        </Grid>
                                        <Button variant="contained" onClick={() => createLessons(index + 1)}>Add lesson</Button>
                                        <Grid container>
                                            <Grid item lg="6" margin="auto" marginTop="10px">
                                                <TextField id="outlined-basic" onChange={(e) => setLessonName(e.target.value)} label="Lesson name" variant="outlined" fullWidth />
                                            </Grid>
                                            <Grid item lg="6" margin="auto" marginTop="10px">
                                                <TextField id="outlined-basic" onChange={(e) => setVideoUrl(e.target.value)} label="Lesson url" variant="outlined" fullWidth />
                                            </Grid>
                                        </Grid>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Box>


            </Grid>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    )
}

export default AddCourse