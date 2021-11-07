import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service';
import fluoride from '../../../images/fluoride.png'
import whitening from '../../../images/whitening.png'
import cavity from '../../../images/cavity.png'
const services=[
  {name:"Fluoride Treatment",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi quaerat, assumenda pariatur obcaecati delectus omnis sint mollitia accusantium. Magni libero, dolor iure sequi deleniti  `,
img:fluoride},
  {name:"cavity Treatment",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi quaerat, assumenda pariatur obcaecati delectus omnis sint mollitia accusantium. Magni libero, dolor iure sequi deleniti  `,
img:cavity},
  {name:"whitening Treatment",
description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi quaerat, assumenda pariatur obcaecati delectus omnis sint mollitia accusantium. Magni libero, dolor iure sequi deleniti . `,
img:whitening},

]
const Serivices = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography  variant="h6" sx={{ color: 'error.main' }} color="text.info" gutterBottom>
         Our Services 
        </Typography>
            <Typography sx={{ fontWeight: 'bold' }}  variant="h4" color="text.info" gutterBottom>
         Services we provide 
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map((service, index) => (
            <Grid item xs={4} sm={8} md={4} key={index}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid></Container>
      </Box>      
    );
};

export default Serivices;