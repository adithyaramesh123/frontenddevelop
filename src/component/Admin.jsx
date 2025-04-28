// // import { Box, Button, TextField, Typography } from '@mui/material'
// // import React, { useState } from 'react'

// // const Admin = () => {
// //   var [input, setForm] = useState({});
// //   const inputHandler = (e) => {
// //     setForm({ ...input, [e.target.value]: e.target.value });
// //     console.log(input);
// //   };
// //   return (
// //     <div>
// //       <Box
// //         sx={{
// //           padding: 1,
// //           backgroundColor: "white",
// //           borderRadius: 3,
// //           marginTop: 5,
// //           boxShadow: 3,
// //           width: 800,
// //           marginRight:5,
// //           marginLeft:25,
// //         }}
// //         >
// //       <Typography variant="h4">Product</Typography>
// //       <br />
// //       <br />
// //       <br />
// //       <TextField
// //         id="outlined-basic"
// //         label="Name"
// //         variant="outlined"
// //         name="pName"
// //         onChange={inputHandler}
// //       />
// //       <br />
// //       <br />
// //       <TextField
// //       // fullWidth
// //         id="outlined-basic"
// //         label="Price"
// //         variant="outlined"
// //         name="price"
// //         onChange={inputHandler}
// //       />
// //       <br />
// //       <br />
// //       <br />
// //       <TextField
// //         id="outlined-basic"
// //         label="Description"
// //         variant="outlined"
// //         name="description"
// //         onChange={inputHandler}
// //       />
// //       <br />
// //       <br />
// //       <br />
// //       <TextField
// //         id="outlined-basic"
// //         label="Stock"
// //         variant="outlined"
// //         name="Stock"
// //         onChange={inputHandler}
        
        
// //       />
       
// //       </Box>
      

// //     </div>
// //   )
// // }

// // export default Admin
// import { Box, Button, Switch, TextField, Typography, FormControlLabel } from '@mui/material'
// import React, { useState } from 'react'
// import Product from './Product';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {
//   const navigate=useNavigate()
//   var base_url=import.meta.env.VITE_API_BASE_URL
//   const [input, setForm] = useState({
//     pName: '',
//     price: '',
//     description: '',
//     stock: '',
//     images:[],
//     available: false
//   });

//   const inputHandler = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...input, [name]: value });
//     console.log('form',input)
//   };

//   // const switchHandler = (e) => {
//   //   setForm({ ...input, available: e.target.checked });
//   // };

//   const submitHandler = () => {
//     console.log('Product Data:', input);
//     const formData =new FormData();
//     formData.append("pName",input.pName)
//     formData.append("price",input.price)
//     formData.append("description",input.description)
//     formData.append("stock",input.stock)
//     input.images.forEach((file)=>{
//       formData.append("images",file)
//     })
//     console.log(formData)
//     axios.post( `${base_url}/p`,formData)
//     .then ((res)=>{
//       console.log(res)
//       alert(res.data.message);
//       navigate('/p')
//     })
//     .catch ((err)=>{
// console.log(err)
//     })
//     // Here, you can add the logic for submitting data (e.g., API call)
//   };

//   return (
//     <Box
//       sx={{
//         padding: 4,
//         backgroundColor: "white",
//         borderRadius: 3,
//         marginTop: 5,
//         boxShadow: 3,
//         width: 600,
//         marginX: "auto"
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Add Product
//       </Typography>

//       <TextField
//         fullWidth
//         label="Product Name"
//         variant="outlined"
//         name="pName"
//         onChange={inputHandler}
     
//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="Price"
//         type='number'
//         variant="outlined"
//         name="price"
//         onChange={inputHandler}
    
//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="Description"
//         variant="outlined"
//         name="description"
//         onChange={inputHandler}

//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="Stock"
//         type='number'
//         variant="outlined"
//         name="stock"
//         onChange={inputHandler}
  
//         margin="normal"
//       />

//       {/* <FormControlLabel
//         control={
//           <Switch
//             checked={input.available}
//             onChange={switchHandler}
//             color="primary"
//           />
//         }
//         label="Available"
//         sx={{ marginY: 2 }}
//       /> */}
//       <Button variant='outlined' component="label" size='small'>Upload Images 
//         <input 
//         type='file'
//         hidden
//         multiple
//         accept='image/*'
//         onChange={(e)=>{
//           setForm({...setForm,images:Array.from(e.target.files)})
//         }}/>
        
//       </Button>

//       <Button

//         variant="contained"
//         color="primary"
//         fullWidth
//         onClick={submitHandler}
//       >
//         Submit
//       </Button>
    
//     </Box>
//   );
// };

// export default Admin;
// import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Admin = () => {
  var location=useLocation();
  var baseurl=import.meta.env.VITE_API_BASE_URL;
  var navigate=useNavigate();
  
  const [input, setProductdata] = useState({
    pName: '',
    price: '',
    description: '',
    stock: '',
    image :[]
  });
useEffect(()=>{
  const {pro}=location.state;
  if(location.state !==null){
  setProductdata({
    pName:pro.pName||"",
    price:pro.price||"",
    stock:pro.stock||"",
    description:pro.description||"",
    images:[]
  })
}},[location.state])
  

  const inputHandler = (e) => {
    setProductdata({...input,[e.target.name]:e.target.value})
    console.log(input)
  };

  // const handleToggle = () => {
  //   setInput((prev) => ({ ...prev, available: !prev.available }));
  // };


const submithandler = (e) => {
  

  const formData = new FormData();
  formData.append('pName', input.pName);
  formData.append('price', input.price);
  formData.append('stock', input.stock);
  formData.append('description', input.description);

  input.image.forEach((file) => {
    formData.append('images', file);
  });

  if(location.state!==null){
    var id=location.state.pro._id
    axios.put(`${base_url}/p/${id}`,formData)
    .then ((res)=>{
      alert(res.data.message)
      navigate('/p')
    })
  }else{
    axios
    .post(`${baseurl}/p`, formData)
    .then((res) => {
      console.log(res.data);
      alert(res.data.message)
    })  
    .catch((err) => {
      console.log(err);  
    });
  }
};

  return (
    <div style={{margin:30}}>
      <Button variant='contained'>
        
        <Link to="/d"style={{textDecoration:"none",color:"white"}}> Product Details</Link>
      </Button>
      
    
    <Box
      sx={{
        maxWidth: 500,
        mx: 'auto',
        padding: 4,
        backgroundColor: '#fdfdfd',
        borderRadius: 3,
        marginTop: 8,
        boxShadow: 4,
      }}
    >
      <Typography variant='h4' gutterBottom align='center'>
        <b>Add Product</b>
      </Typography>

      <form>
        <TextField
          fullWidth
          label='Product Name'
          variant='outlined'
          margin='normal'
          name='pName'
       
          value={input.pName}
          onChange={inputHandler}
          required
        />

        <TextField
          fullWidth
          label='Price'
          type='number'
          variant='outlined'
          margin='normal'
          name='price'
          value={input.price}
          onChange={inputHandler}
          required
        />

        <TextField
          fullWidth
          label='Description'
          variant='outlined'
          margin='normal'
          name='description'
          value={input.description}
          onChange={inputHandler}
          multiline
          rows={3}
        />

        <TextField
          fullWidth
          label='Stock'
          type='number'
          variant='outlined'
          margin='normal'
          name='stock'
          value={input.stock}
          onChange={inputHandler}
          required
        />
        <FormControlLabel
          control={
            <Switch
             color='warning'
            />
          }
          label='Available'
          sx={{ color: 'black', mt: 1 }}
        />
        <Button variant='outlined' component="label">
          Upload Images
          <input type='file'
          hidden
          multiple
          accept='images/*'
          onChange={(e)=>{
            setProductdata({...input,
              image:Array.from(e.target.files)
            })
          }}
          />
        </Button>

        

        <Button
          fullWidth
   
          variant='contained'
          color='secondary'
          sx={{ mt: 3 }}
          onClick={submithandler}
        >
          Submit
        </Button>
      </form>
    </Box>
    </div>
  )
}

export default Admin