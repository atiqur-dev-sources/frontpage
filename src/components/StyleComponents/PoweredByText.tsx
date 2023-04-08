import React from 'react';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  fontSize: '12px',
  color: '#999',
  marginTop: '10px',
  textAlign: 'center',
});

const PoweredByText: React.FC = () => {
  return (
    <Container>
      Powered by: IT, City Group. © All rights reserved.
    </Container>
  );
};

export default PoweredByText;
