import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    var [input, setInput] = useState({}); 
    var base_url=import.meta.env.VITE_API_BASE_URL
    var navigate=useNavigate()
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const addHandler=()=>{
    console.log("clicked")
    axios.post (`${base_url}/api`,input)
    .then ((res)=>{
      console.log(res)
      alert(res.data.message)
      navigate('/')
    })
    .catch ((err)=>{
console.log(err)
    })
  }
  return (
    <div>
        <Container maxWidth="sm">
<Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          borderRadius: 2,
          marginTop: 5,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" color='secondary'>Welcome to Product Page</Typography>
        <br />
        <TextField
          id="outlined-basic"
          label="FullName"
          variant="outlined"
          name="FullName"
          onChange={inputHandler}
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="Email"
          onChange={inputHandler}
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="Password"
          onChange={inputHandler}
        />
        <br />
        <br />
        <br />
        <Button color='secondary' onClick = {addHandler} variant="contained">Signup</Button>
        <Typography variant='body2'
        align='center'
        sx={{marginTop:"1rem,",color:"text.secondary"}}>
            Already a user?{" "}
            <Link href='/' underline='hover'color='primary '>Login Here</Link>
            
        </Typography>
      </Box>
      </Container>
    </div>
    
  )
}

export default Signup
