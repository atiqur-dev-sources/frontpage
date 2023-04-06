
import Body from '@/components/homepagelayout/body';
import Footer from '@/components/homepagelayout/footer';
import Header from '@/components/homepagelayout/header';


import { Box, Container } from '@mui/material';

const landing = () => {
    return (
        <>
           <Header />
      <Container maxWidth="lg">
        <Body />
      </Container>
      <Footer />
        </>
      );
};

 export default landing;

