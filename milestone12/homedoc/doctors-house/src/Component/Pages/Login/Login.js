import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
// import  AlertTitle  from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import login from '../../images/login.png'
import Grid from '@mui/material/Grid';
import { Container, AlertTitle } from '@mui/material';
import Navigation from './../../Shared/Navigation/Navigation';
import  Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../Context/useAuth';
const Login = () => {
    const [logindata,SetLoginData]=useState({});
    const {user,PasswordSignIn,isLoading,error,googleSignIn}=useAuth();
    const location=useLocation();
    const history =useHistory();
    const handlingGoogleSignIn=()=>{
        googleSignIn(history,location)
    }
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const handlingSubmit=e=>{
      e.preventDefault();
      PasswordSignIn(logindata.email,logindata.password,history,location)
  }
  const handlingOnChange=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newLoginData={...logindata};
      newLoginData[field]=value;
      SetLoginData(newLoginData)
  }
    return (
        <>
        <Navigation></Navigation>
        <Container >
            
        <Box sx={{ flexGrow: 1 ,display:"flex", justifyContent:'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h4" gutterBottom component="div">
      Login  <br/>
      </Typography>
     <form onSubmit={handlingSubmit}>
     <Typography>
      <TextField id="filled-basic" onChange={handlingOnChange} name="email" label="Your email" variant="filled" />
          </Typography>
      <Typography>
      <TextField  onChange={handlingOnChange} id="filled-basic" name="password" label="Your password" variant="filled" />
      <br />
      <Button variant="contained" type="submit">Login</Button>
          </Typography>
          <Typography>
          <h3>New user?  <Link to="/register"> Register here please </Link> </h3>
          </Typography>
          <Typography>
          <h3> Or Sign In with google here  </h3>
          <Button variant="contained" onClick={handlingGoogleSignIn} >Login</Button>
          </Typography>
     

     </form>
     {
         isLoading &&  <CircularProgress />
     }
     {
         user?.email && 
         <Alert severity="success"> You have successfully logged into your  account my child!</Alert>
     }
     {
       error && <Alert severity="error">
       {error}
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

export default Login;