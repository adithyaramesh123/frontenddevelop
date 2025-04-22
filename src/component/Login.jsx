import { Box, Button, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Login = () => {
     var [input, setInput] = useState({}); 
      const inputHandler = (e) => {
        setInput({ ...input, [e.target.value]: e.target.value });
        console.log(input);
      };
      const addHandler=()=>{
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
