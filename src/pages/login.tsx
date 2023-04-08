import React from 'react';
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography ,Image, Checkbox } from '@mui/material';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import CenterAlignedImage from '@/components/StyleComponents/CenterAlignedImage';
import PoweredByText from '@/components/StyleComponents/PoweredByText';
import { useState } from 'react';
import RememberMe from '@/components/RememberMe';
import { useRouter } from 'next/router';
const LoginPage = () => {
  const [employeeId, setEmployeeId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router=useRouter();
  const [errors, setErrors] = React.useState({
    employeeId: '',
    password: '',
  });
  const handleRememberMeChange = (checked: boolean) => {
    setRememberMe(checked);
  };
  const handleEmployeeIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(event.target.value);
    setErrors({ ...errors, employeeId: '' });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: '' });
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     console.log(rememberMe);
     if (rememberMe) {
        localStorage.setItem("rememberMe", "Remember Me");
      } else {
        localStorage.removeItem("rememberMe");
      }

    try {
      // call the submit API using axios
      const response = await axios.post('https://youapipath/submit', { employeeId, password });
      console.log(response.data);
      // if (rememberMe) {
      //   localStorage.setItem("rememberMe", "Remember Me");
      // } else {
      //   localStorage.removeItem("rememberMe");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlur = () => {
    const validationSchema = Yup.object().shape({
      employeeId: Yup.string().required('Please put employee Id'),
      password: Yup.string().required('Please put your password'),
    });

    validationSchema.validate({ employeeId, password }, { abortEarly: false }).catch((err) => {
      const newErrors: { [key: string]: string } = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #FFF1CD, #FFE8ED)'
       // backgroundColor:'linear-gradient(135deg, #FFF1CD, #FFE8ED)' // Set the background color of the page
       
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to City Group apps
      </Typography>
      <Box
        sx={{
          border: '1px solid #ccc',
          padding: 3,
          maxWidth: '80%',
          width: 500,
          bgcolor: '#ffffff' // Set the background color of the page
        }}
      >
         {/* Logo */}
         <CenterAlignedImage imageUrl={'./logo2.png'} sx={{ height: 60 }} />
         {/* <CenterAlignedImage imageUrl="./logo2.png"></CenterAlignedImage> */}
         
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <FormControl variant="outlined" error={Boolean(errors.employeeId)}>
            <InputLabel htmlFor="employee-id-input">Employee Id</InputLabel>
            <OutlinedInput
              id="employee-id-input"
              value={employeeId}
              onChange={handleEmployeeIdChange}
              onBlur={handleBlur}
              label="Employee Id"
            />
            <FormHelperText>{errors.employeeId}</FormHelperText>
          </FormControl>
          <FormControl variant="outlined" error={Boolean(errors.password)}>
            <InputLabel htmlFor="password-input">Your Password</InputLabel>
            <OutlinedInput
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              onBlur          ={handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Your Password"
            />
            <FormHelperText>{errors.password}</FormHelperText>
          </FormControl>
          <RememberMe checked={rememberMe} onChange={handleRememberMeChange} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
           
            <Button variant="contained" color="secondary" onClick={()=>{router.push("/")}} startIcon={<ArrowBackIcon />}>
              Back
            </Button>
            <Button variant="contained" color="primary"  disabled={!employeeId || !password} type="submit" startIcon={<SendIcon />}>
              SignIn
            </Button>
          </Box>
        </Box>
        {/* Footer text */}
      <Box sx={{ mt: 4 }}>
       <PoweredByText></PoweredByText>
      </Box>

      </Box>
      
    </Box>
    );
};

export default LoginPage;
    
