import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../config/api';

function AddCourse() {
    const [category, setCategory] = useState('');
    const [contentName, setContentName] = useState('');
    const [lessonName, setLessonName] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [courseContents, setCourseContents] = useState([])
    const [contentsCount, setContentsCount] = useState([1]);
    const [check, setCheck] = useState(false)
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);
    const [photoUrl, setPhotoUrl] = useState([]);
    const [price, setPrice] = useState([]);
    const [categoryId, setCategoryId] = useState([]);


    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    console.log(category.toString());


    const AddData = () => {
        fetch(`${BASE_URL}/Course/addcourse`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                courseContents: courses,
                name: name,
                description: description,
                photoUrl: photoUrl,
                userId: 1,
                raiting: 0,
                duration: 0,
                price: price,
                categoryId: category.toString()
            })
        })
    }

    const addContentHandeler = () => {
        let result = [
            {
                "id": contentsCount.length,
                "contentName": contentName,
                "contentLessons": courseContents

            }
        ]
        setCourses([...courses, ...result])
        let content = contentsCount;
        content.push(1)
        setContentsCount(content)
        setCourseContents([])
        setCheck(!check)
    }

    const createLessons = (index) => {
        let data = [
            {
                "id": index,
                "lessonName": `${lessonName}`,
                "videoUrl": `${videoUrl}`
            }
        ]
        setCourseContents([...courseContents, ...data])



    }



    console.log(courseContents)
    console.log(courses)


    useEffect(() => {
    }, [check])
    return (
        <div>
            <Grid container width="60%" margin="auto">
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" onChange={(e) => setName(e.target.value)} label="Course name" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" onChange={(e) => setDescription(e.target.value)} label="Course description" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" onChange={(e) => setPhotoUrl(e.target.value)} label="Course photo url" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField id="outlined-basic" onChange={(e) => setPrice(e.target.value)} label="Course price" variant="outlined" fullWidth />
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
                            <MenuItem value={4}>MERN</MenuItem>
                            <MenuItem value={2}>Java</MenuItem>
                            <MenuItem value={3}>Python</MenuItem>

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
                                    <Typography>
                                        {

                                            courses.filter(x => x.id == index + 1).map((data, index) => (
                                                <div key={index} className="div">
                                                    {
                                                        data.contentLessons.map((x,id)=>(
                                                            <div key={id}>
                                                                {x.lessonName}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Box>

                

            </Grid>
            <Grid container width="40%" margin="auto">
            <br />
                <br />
                <Button variant="contained" onClick={() => AddData()}>Submit</Button>
            </Grid>
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