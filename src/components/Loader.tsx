// components/Loader.tsx
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
