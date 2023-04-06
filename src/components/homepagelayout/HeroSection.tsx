import { Box, Button, Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to our stunning home page!
        </Typography>
        <Button variant="contained" size="large">
          Login
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
