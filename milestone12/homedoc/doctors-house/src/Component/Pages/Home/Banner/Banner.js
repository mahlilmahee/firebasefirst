import React from 'react';
import chair from '../../../images/chair.png'
import bg from  '../../../images/bg.png';
import bf from '../../../images/bg.png'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Container ,Box} from '@mui/material';
// import { Box } from '@mui/material/Box';

const bannerbg={
    background:`url(${bf})`,
    height:600
}
const vertical ={
    display:'flex',
    alignItems:"center",
    height:550
}
const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1 ,justifyContent:"center"}}>
        <Grid container spacing={2}>
         
         <Grid item xs={12} md={6} style={{...vertical,textAlign:'left',my:3}}>
             <Box>
            <Typography variant="h4"> 
               Your New Smile <br />
               Starts here 
            </Typography>
            <Typography variant="h6" sx={{fontSize:14 , fontWeight:300, color:'gray'}}> 
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam magni possimus minus? Eligendi voluptatum nulla consectetur eum vero aut velit optio ullam cumque reiciendis! Officia commodi ullam id autem.
            </Typography>
            <Button variant="contained">Get Appoinment</Button>
            </Box>
          </Grid>
         
          <Grid item xs={12} md={6} style={vertical}>
           <img style={{width:'400px'}} src={chair} alt=""  />
          </Grid>
          
        </Grid>
      </Container>
    );
};

export default Banner;