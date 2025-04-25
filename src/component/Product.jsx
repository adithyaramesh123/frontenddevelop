import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Product = () => {
  return (
    <div>
      {/* <Grid container spacing={2}>
        {data.map((val,i)=>{
            return(
                <Grid size={{xs:4,md:3}}>
                  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={val.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {val.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {val.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  

                </Grid>
            )
            
            
            
        })}

      </Grid> */}
    </div>
  )
}

export default Product
