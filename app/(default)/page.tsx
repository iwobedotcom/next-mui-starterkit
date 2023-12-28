import { Box, Typography } from '@mui/material';

export default function Home(): React.ReactElement {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: '32px',
          fontWeight: 'bold'
        }}
      >
        Cillum consectetur culpa labore amet ad est culpa.
      </Typography>
    </Box>
  );
}
