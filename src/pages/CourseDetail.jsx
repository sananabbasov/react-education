import { Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItem, ListItemText, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesByIdAction } from '../redux/actions/CourseActions';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
function CourseDetail() {
    const [expanded, setExpanded] = useState('panel0');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const {id} = useParams()
    const { courses } = useSelector((state) => state.courses)
    const dispatch = useDispatch()

    useState(() => {
        dispatch(getCoursesByIdAction(id))
    }, [])

    return (
        <>
          <Header />
            <Grid width="60%" margin="auto" container spacing={4}>
                <Grid item lg={8}>
                    <h1>{courses.name}</h1>
                    <img width="100%" src={courses.photoUrl} alt="" />
                    <p>
                        {courses.description}
                    </p>

                    {/* Accardion start */}

                    <div>
                        {
                            courses.courseContents &&
                            courses.courseContents.map((c, index) => (
                                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        <Typography>{c.contentName}</Typography>
                                    </AccordionSummary>
                                    {
                                        c.contentLessons &&
                                        c.contentLessons.map((cl, index) => (
                                            <AccordionDetails key={index}>
                                                <Typography display="flex" alignItems="center">
                                                    <PlayCircleIcon /> {cl.lessonName}
                                                </Typography>
                                            </AccordionDetails>
                                        ))
                                    }

                                </Accordion>
                            ))
                        }

                    </div>
                    {/* Acardion end */}
                </Grid>
                <Grid item lg={4}>
                    <div className='course_feature'>
                        <h1>Course Features</h1>
                        <ul>
                            <li>Raiting: {courses.raiting} 
                            <br />
                            <Rating name="read-only" value={courses.raiting} readOnly /></li>
                            <hr />
                            <li>Duration: </li>
                            <hr />
                            <li>Price: </li>
                            <hr />
                        </ul>
                    </div>
                </Grid>
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
            <br />
            <br />

        </>
    )
}

export default CourseDetail