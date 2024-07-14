import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Copyright from '../components/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome
        </Typography>
        <Link to="/about" color="secondary">
          About me
        </Link>
        <Typography variant="p" component="p" sx={{ mb: 2 }}>
        Just a basic blog for me to flaunt about with
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}