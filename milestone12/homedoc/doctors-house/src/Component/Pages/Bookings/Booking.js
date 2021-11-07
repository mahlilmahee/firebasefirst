import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { Button } from '@mui/material';
import BookingModel from './BookingModel';
const Booking = ({time,space,name,date,setBookingsuccess}) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
  <>
            <Grid item xs={12} sm={6} md={4} lg={4} sx={{padding:2}}>
                <Paper elevation={3} >
                <Typography variant="h4" gutterBottom component="div" sx={{mt:2}}>
        {name}
      </Typography>
                <Typography variant="caption" display="block" gutterBottom>
        {time}
      </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
      {space} spaces avaiable <br />
      <Button  onClick={handleOpen}   variant="contained" sx={{mb:2}}>Book now </Button>
                </Typography>
                    </Paper>
                   <BookingModel setBookingsuccess={setBookingsuccess} handleClose={handleClose} time={time} date={date} name={name} open={open}></BookingModel>
             </Grid>
            
             </>
        
  
    );
};

export default Booking;