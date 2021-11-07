import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Service = (props) => {
    const {name,description,img}=props.service;

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    return (
        <Card sx={{ minWidth: 275, border: 0,boxShadow: 0  }}>
             <CardMedia
        component="img"
        style={{width:"auto",margin:"0 auto"}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography  variant="h6" color="text.secondary" gutterBottom>
         {name}
        </Typography>
        <Typography  component="div">
         {description}
        </Typography>
        
        
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    );
};

export default Service;