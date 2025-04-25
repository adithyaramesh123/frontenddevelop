import { Box, Button, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
     var [input, setInput] = useState({}); 
     var base_url=import.meta.env.VITE_API_BASE_URL
     var navigate=useNavigate()
      const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input);
      };
      const addHandler=()=>{
        axios.post (`${base_url}/api/Login`,input)
        .then ((res)=>{
          sessionStorage.setItem("role",res.data.user.role)
          if(res.status===200){
          alert(res.data.message)
        if(res.data.user.role=='admin'){
          navigate('/admin')
        }
        else{
          navigate('/p')
        }
      }
        })
        .catch((err)=>{
          console.log(err)
        })
        console.log("clicked")
      }

  return (
    <div>
      <Box
              sx={{
                padding: 4,
                backgroundColor: "white",
                borderRadius: 2,
                marginTop: 5,
                boxShadow: 3,
              }}
            >
              <Typography variant="h4" color='secondary'>Welcome To Product Page</Typography>
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
              <Button color='secondary' onClick = {addHandler} variant="contained">Login</Button>
              <Typography variant='body2'
        align='center'
        sx={{marginTop:"1rem,",color:"text.secondary"}}>
            Already a user?{" "}
            <Link href='/sign' underline='hover'color='primary '>Create an account</Link>
            
        </Typography>
            </Box>
    </div>
  )
}

export default Login
