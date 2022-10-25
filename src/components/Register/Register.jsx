import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, Route, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config/api'
import Banner from '../Banner/Banner'
import '../Register/register.scss'
function Register() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");


    const navigate = useNavigate()

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    const registerUser = async () => {
        let result = await fetch(`${BASE_URL}/auth/register`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    surname: surname,
                    email: email,
                    password: values.password,
                    passwordRepeat: "sadasdasd"
                })
            }).then(data => data.json())


        if (result.status == 200) {
            navigate('/');
        }
    }
    return (
        <div>
            <Grid container width="60%" margin="auto">

                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" fullWidth />
                </Grid>

                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField onChange={(e) => setSurname(e.target.value)} id="outlined-basic" label="Surname" variant="outlined" fullWidth />
                </Grid>

                <Grid item lg="8" margin="auto" marginTop="50px">
                    <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>

                <Grid item lg="8" margin="auto" marginTop="50px">
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>

                <Grid item lg="8" margin="auto" marginTop="50px" marginBottom="100px">
                    <Button onClick={() => registerUser()} variant="outlined">Register</Button>
                </Grid>


            </Grid>
        </div>
    )
}

export default Register