/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// ** MUI Imports
import { Theme } from '@mui/material/styles';

// ** Util Import
import { hexToRGBA } from '@/utils/hex-to-rgba';

const Backdrop = (theme: Theme) => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor:
          theme.palette.mode === 'light'
            ? `rgba(${theme.palette.background.paper})` // ? `rgba(${theme.palette.customColors.main}, 0.7)`
            : hexToRGBA(theme.palette.background.default, 0.7),
      },
      invisible: {
        backgroundColor: 'transparent',
      },
    },
  },
});

export default Backdrop;
