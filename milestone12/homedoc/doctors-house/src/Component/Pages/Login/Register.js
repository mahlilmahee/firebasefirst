import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import login from '../../images/login.png'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Navigation from './../../Shared/Navigation/Navigation';
import  Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


import useAuth from './../../Context/useAuth';
const Register = () => {
    const [logindata,SetLoginData]=useState({});
    const {emailPasswordCreate,user,isLoading,error}=useAuth();
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const history=useHistory();
      const handlingSubmit=e=>{
          e.preventDefault();
          if(logindata.password!==logindata.password2){
              alert( "retype your password , it didnot match here ");
               
          }
          else{
              emailPasswordCreate(logindata.email,logindata.password,history,logindata.name);
               console.log(user)
          }
          
      }
      const handlingonBlur=e=>{
          const field=e.target.name;
          const value=e.target.value;
          const newLoginData={...logindata};
          newLoginData[field]=value;
          SetLoginData(newLoginData);
          console.log(logindata)
      }
    return (
        <>
        <Navigation></Navigation>
        <Container >
            
        <Box sx={{ flexGrow: 1 ,display:"flex", justifyContent:'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" gutterBottom component="div">
      Register here  <br/>
      </Typography>
     { !isLoading &&<form onSubmit={handlingSubmit}>
     <Typography>
      <TextField id="filled-basic" onBlur={handlingonBlur} name="name" label="Your name" variant="filled" /> <br/>
      <TextField id="filled-basic" type="email" onBlur={handlingonBlur} name="email" label="Your email" variant="filled" />
          </Typography>
      <Typography>
      <TextField  onBlur={handlingonBlur} id="filled-basic" name="password" label="Your password" variant="filled" /> <br />
      <TextField  onBlur={handlingonBlur} id="filled-basic" name="password2" label="Retype your password" variant="filled" />
      <br />
      <Button variant="contained" type="submit" >submit </Button>
          </Typography>
          <Typography>
          <h3>Or  <Link to="/login"> Login  here please </Link> </h3>
          </Typography>
     </form>}
     {
         isLoading &&  <CircularProgress />
     }
     {
         user?.email && 
         <Alert severity="success"> You have successfully created your new account my child!</Alert>
     }
     {
       error && <Alert severity="error">
       <strong>{error}</strong>
     </Alert>
     }
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
             <img src={login} style={{width:'450px'}} alt="" />
          </Grid>
          
        </Grid>
      </Box>
      </Container>
      </>
    );
};

export default Register;