import { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Send, ArrowBack } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const theme = createTheme();

const validationSchema = yup.object({
  employeeId: yup.string().required('Please put employee Id'),
  password: yup.string().required('Please put your password'),
});

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      employeeId: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post('https://youapipath/submit', values);
        console.log('response', response);
      } catch (error) {
        console.error('error', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography variant="h4" component="h1" mb={2}>
            Welcome to City Group apps
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <FormControl error={formik.touched.employeeId && Boolean(formik.errors.employeeId)}>
              <InputLabel htmlFor="employee-id">Employee Id</InputLabel>
              <Input
                id="employee-id"
                name="employeeId"
                type="text"
                value={formik.values.employeeId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  formik.touched.employeeId && Boolean(formik.errors.employeeId) ? (
                    <InputAdornment position="end">
                      <IconButton aria-label="error">
                        <FormHelperText>{formik.errors.employeeId}</FormHelperText>
                      </IconButton>
                    </InputAdornment>
                  ) : null
                }
              />
            </FormControl>
            <FormControl error={formik.touched.password && Boolean(formik.errors.password)}>
              <InputLabel htmlFor="password">Your Password</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                endAdornment={
                  formik.touched.password && Boolean(formik.errors.password) ? (
                    <InputAdornment position="end">
                      <IconButton aria-label="error">
                        <FormHelperText>{formik.errors.password}</FormHelperText>
                      </IconButton>
                    </InputAdornment>
                  ) : null
                }
              />
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
<Button variant="contained" color="primary" startIcon={<Send />} type="submit" disabled={isSubmitting || !formik.isValid}>
{isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
</Button>
<Button variant="contained" color="secondary" startIcon={<ArrowBack />} onClick={() => console.log('back clicked')}>
Back
</Button>
</Box>
</Box>
</Box>
</Container>
</ThemeProvider>
);
}

