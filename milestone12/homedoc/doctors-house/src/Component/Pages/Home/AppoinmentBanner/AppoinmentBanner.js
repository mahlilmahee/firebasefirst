import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ima from '../../../images/doctor.png'
import { Button, Typography } from '@mui/material';
import banner from '../../../images/appointment-bg.png'
const AppoinmentBanner = () => {

    const ban={
        background:`url(${banner})`,
        marginTop:'150px',
        backgroundColor:"rgba(46, 127, 134,0.78)",
        backgroundBlendMode:" darken, luminosity"
    }
    return (
        <Box style={ban} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
            style={{width:"400px",marginTop:"-100px"}}
            src={ima} alt="" />
          </Grid>
          <Grid  sx={{
               display:'flex',
               justifyContent:"flex-start",
               alignItems:"center",
               textAlign:'left'

           }} item xs={12} md={6}>
           <Box >
           <Typography> 
               Appoinment 
           </Typography>
           <Typography variant="h4" style={{color:"white ", marginBottom:"20px"}}> 
               Make an appoinment 
           </Typography>
           <Typography variant="h4"  sx={{marginTop:'20px'}}   style={{color:"white",fontSize:"1.2rem"}}> 
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi culpa modi ipsum! Dolorum hic molestiae magnam, possimus quae tempora reiciendis?
           </Typography>
           <Button variant="contained" sx={{marginTop:'20px'}} >Learn  More</Button>
           </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;