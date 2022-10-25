import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Register from '../components/Register/Register';
import Banner from '../components/Banner/Banner';
import Login from '../components/Login/Login';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Auth() {

    const [value, setValue] = useState(0);
    const [title, setTitle] = useState("Login")
    const handleChange = (event, newValue) => {
        setValue(newValue);
        title == "Login" ? setTitle("Register") : setTitle("Login") 
    };
    return (
        <div>
            <Banner coverPhoto={"https://comparassetsource.s3.amazonaws.com/media/blog/article/coding-bootcamp.jpg"} title={title} searchInput={false} bannerHeight={"400px"} />
            <Box sx={{ width: '40%', margin: 'auto' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                </Box>

            </Box>

            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register />
            </TabPanel>
        </div>
    )
}

export default Auth