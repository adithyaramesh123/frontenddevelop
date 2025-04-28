import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const Product = () => {
var [Product,setProduct]=useState([]);
var base_url=import.meta.env.VITE_API_BASE_URL

useEffect(()=>{
  axios.get(`${base_url}/p`)
  .then ((res)=>{
    setProduct(res.data)
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
})
  return (
    <div>
      <Grid container spacing={2}>
        {Product.map((val,i)=>{
            return(
                <Grid size={{xs:4,md:3}}>
                  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${base_url}/uploads/${val.images[0]}`}
         
        />
        <CardContent>
          <Typography>{val.pName}</Typography>
          <Typography>{val.price}</Typography>
          <Typography>{val.description}</Typography>
          <Typography>{val.stock}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>  

                </Grid>
            )
            
            
            
        })}

      </Grid>
    </div>
  )
}

export default Product
