import React from 'react';
import { CircularProgress, Box } from '@mui/material';

interface LoaderProps {
  width: string;
  height: string;
}

const Loader: React.FC<LoaderProps> = ({ width, height }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={width}
      height={height}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
