import { Update } from '@mui/icons-material';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Productdetails = () => {
    var [product,setProduct]=useState([]);
    var location=useLocation();
    var navigate=useNavigate();
    console.log("loc",location.state)
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
},[]) 
const UpdatePro=(pro)=>{
    console.log(pro);
    navigate('/admin',{state:{pro}})
}
  return (
    

    <div>
      {/* <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell><strong>product pName</strong></TableCell>
                <TableCell><strong>product price</strong></TableCell>
                <TableCell><strong>product stock</strong></TableCell>
                <TableCell><strong>product action</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Product.map((val,i))}
            </TableBody>
        </Table>
      </TableContainer> */}
       <TableContainer sx={{marginTop:2}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <strong>Product Name</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Product Price</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Product Stock</strong>
                    </TableCell>
                    <TableCell>
                        <strong>Actions</strong>
                    </TableCell>
                </TableRow> 
            </TableHead>
            <TableBody>
                {product.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.pName}</TableCell>
                            <TableCell>{val.price}</TableCell>
                            <TableCell>{val.stock}</TableCell>
                            <TableCell>
                                <Button variant='contained' onClick={()=>{UpdatePro(val)}}>Update</Button>&nbsp;
                                <Button variant='contained'>Delete</Button>

                            </TableCell>


                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>

      
    </div>
  )
}

export default Productdetails
