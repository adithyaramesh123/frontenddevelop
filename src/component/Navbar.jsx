import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <AppBar color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:"white"}}>Home</Link></Button>
          <Button><Link to={'/c'} style={{textDecoration:'none',color:"white"}}>Form</Link></Button>
          
        </Toolbar>
      </AppBar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
