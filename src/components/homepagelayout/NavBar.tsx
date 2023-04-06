import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button variant="contained" size="large">
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
