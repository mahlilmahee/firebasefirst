import React ,{useState}from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from './../../Context/useAuth';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModel = ({open,handleClose,time,name,date,setBookingsuccess}) => {
  const {user}=useAuth();
  const initialvalue={patientName:user.displayName,email:user.email,phoneNumber:''};
  const [userInfo,setUserInfo]=useState(initialvalue);
const handlingForm=e=>{
  e.preventDefault();
  const myData={...userInfo,
   time,
   date:date.toLocaleDateString(),
   serviceName:name
  }
  fetch( 'http://localhost:5000/appoinments',{
    method:"POST",
    headers:{
     'content-type':'application/json' 
    },
    body:JSON.stringify(myData)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.insertedId){
      handleClose();
      setBookingsuccess(true)
    }
  })
  // console.log(myData)
  // alert(" Submitted successfully my dear customer please wait for our response ");
  
};

const handlingPatientInfo =e=>{
    const field =e.target.name;
    const value=e.target.value;
    const newValue={...userInfo};
    newValue[field]=value;
    console.log(newValue);
    setUserInfo(newValue);
  }

  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <form > 
            <TextField 
            id="filled-basic" 
            name="patientName"
            onBlur={handlingPatientInfo}
            label={user.displayName}
             variant="filled" 
              sx={{width:"90%"}}
             />
            <TextField
             id="filled-basic"
             name="email"
             onBlur= {handlingPatientInfo}
             label={user.email}
               variant="filled" 
                sx={{width:"90%"}} />
            <TextField 
            id="filled-basic"
            name="phoneNumber"
            onBlur={handlingPatientInfo}
             label="phone number "
              variant="filled"
                sx={{width:"90%"}} />
            <TextField sx={{width:'90%'}}
            id="outlined-read-only-input"
            name="time"
            onBlur={handlingPatientInfo}
            defaultValue={time}
            InputProps={{
            readOnly: true,
           } }
        />
        <Button variant="contained" onClick={handlingForm}>Submit </Button>
            </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModel;