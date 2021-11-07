import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Booking from '../../Bookings/Booking';
import Alert  from '@mui/material/Alert';
const AvaiableAppoinment = ({date}) => {
    // const [updatestatee,setUpdatestate]=useState(false)
    const [bookingSuccess,setBookingsuccess]=useState(false)
    const bookings =[
        {id:1,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"10"
        },
        {id:11,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"7"
        },
        {id:3,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"5"
        },
        {id:61,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"7"
        },
        {id:15,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"5"
        },
        {id:61,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"6"
        },
        {id:14,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"7"
        },
        {id:4,
         name:"cavity check",
         time:"9.00PM - 5.00 PM  ",
         space:"6"
        },
    ]
    
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    return (
    <Container>
            <h2> Your booking is on this date  {date.toDateString()}</h2>
            { bookingSuccess &&  <Alert severity="success">you have booked your appoinment successfully </Alert>}
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
       {
           bookings.map( data=> <Booking setBookingsuccess={setBookingsuccess} key={data.id} date={date}  time={data.time} space={data.space} name={data.name} ></Booking>)
       }
        {/* </Grid> */}
        
      </Grid>
    </Box>
        </Container>
    );
};

export default AvaiableAppoinment;