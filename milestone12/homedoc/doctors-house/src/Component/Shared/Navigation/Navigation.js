import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/AuthentificationHook';

const Navigation = () => {
  const {user,signOutFromAll} =useFirebase()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
            Doctors portal 
            </Typography>
            <Link to="/"><Button variant="contained" color="success" sx={{mx:2}}>Home</Button> </Link>
            <Link to="/appoinment"><Button variant="contained" color="success" sx={{mx:2}}>Appoinment</Button> </Link>
            <Link to="/dashboard"><Button variant="contained" color="success" sx={{mx:2}}>Dashboard</Button> </Link>
           {
             !user?.email ?  <Link to="/login"> <Button color="success" variant="contained" >  Login</Button></Link> : <Link to="/login"> <Button color="success" variant="contained" onClick={signOutFromAll} >  Logout</Button></Link>           }
           
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;