// import { Box, Button, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'

// const Admin = () => {
//   var [input, setForm] = useState({});
//   const inputHandler = (e) => {
//     setForm({ ...input, [e.target.value]: e.target.value });
//     console.log(input);
//   };
//   return (
//     <div>
//       <Box
//         sx={{
//           padding: 1,
//           backgroundColor: "white",
//           borderRadius: 3,
//           marginTop: 5,
//           boxShadow: 3,
//           width: 800,
//           marginRight:5,
//           marginLeft:25,
//         }}
//         >
//       <Typography variant="h4">Product</Typography>
//       <br />
//       <br />
//       <br />
//       <TextField
//         id="outlined-basic"
//         label="Name"
//         variant="outlined"
//         name="pName"
//         onChange={inputHandler}
//       />
//       <br />
//       <br />
//       <TextField
//       // fullWidth
//         id="outlined-basic"
//         label="Price"
//         variant="outlined"
//         name="price"
//         onChange={inputHandler}
//       />
//       <br />
//       <br />
//       <br />
//       <TextField
//         id="outlined-basic"
//         label="Description"
//         variant="outlined"
//         name="description"
//         onChange={inputHandler}
//       />
//       <br />
//       <br />
//       <br />
//       <TextField
//         id="outlined-basic"
//         label="Stock"
//         variant="outlined"
//         name="Stock"
//         onChange={inputHandler}
        
        
//       />
       
//       </Box>
      

//     </div>
//   )
// }

// export default Admin
import { Box, Button, Switch, TextField, Typography, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import Product from './Product';
import axios from 'axios';

const Admin = () => {
  const [input, setForm] = useState({
    pName: '',
    price: '',
    description: '',
    stock: '',
    available: false
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...input, [name]: value });
  };

  const switchHandler = (e) => {
    setForm({ ...input, available: e.target.checked });
  };

  const submitHandler = () => {
    console.log('Product Data:', input);
    const formData =new FormData();
    formData.append("pName",ProductData,pName)
    formData.append("price",ProductData,price)
    formData.append("description",ProductData,description)
    formData.append("stock",ProductData,stock)
    ProductData.images.forEach((file)=>{
      formData.append("images",file)
    })
    axios.post(`${base_url}`,formData)
    // Here, you can add the logic for submitting data (e.g., API call)
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "white",
        borderRadius: 3,
        marginTop: 5,
        boxShadow: 3,
        width: 600,
        marginX: "auto"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add Product
      </Typography>

      <TextField
        fullWidth
        label="Product Name"
        variant="outlined"
        name="pName"
        onChange={inputHandler}
        value={input.pName}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Price"
        type='number'
        variant="outlined"
        name="price"
        onChange={inputHandler}
        value={input.price}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Description"
        variant="outlined"
        name="description"
        onChange={inputHandler}
        value={input.description}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Stock"
        type='number'
        variant="outlined"
        name="stock"
        onChange={inputHandler}
        value={input.stock}
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={input.available}
            onChange={switchHandler}
            color="primary"
          />
        }
        label="Available"
        sx={{ marginY: 2 }}
      />
      <Button variant='oulined' component="label" size='small'>Upload Images 
        <input 
        type='file'
        hidden
        multiple
        accept='image/*'
        onChange={(e)=>{
          setProductData({...ProductData,images:Array.from(e.target.files)})
        }}/>
        
      </Button>

      <Button

        variant="contained"
        color="primary"
        fullWidth
        onClick={submitHandler}
      >
        Submit
      </Button>
    
    </Box>
  );
};

export default Admin;
