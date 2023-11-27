import { styled } from '@mui/system';
import { Switch } from '@mui/material';

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  ".MuiSwitch-track": {
    backgroundColor: "#0E477E",
  },
  '& .MuiSwitch-switchBase': {
  
    '&.Mui-checked': {
      marginRight: '0',
      color: theme.palette.common.white,
      '& + .MuiSwitch-track': {
        backgroundColor: "#0E477E",
      },
      '& .MuiSwitch-thumb': {
        color: theme.palette.common.white,
      },
    },
  },
}));
