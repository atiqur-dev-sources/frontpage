import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface CenterAlignedImageProps extends BoxProps {
  imageUrl: string;
}

const CenterAlignedImage: React.FC<CenterAlignedImageProps> = ({ imageUrl, ...boxProps }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingBottom={"2rem"}
      height="60%"
      {...boxProps}
    >
      <img src={imageUrl} alt="center aligned" style={{ maxWidth: '40%', height: 'auto' }} />
      
    </Box>
  );
};

export default CenterAlignedImage;
