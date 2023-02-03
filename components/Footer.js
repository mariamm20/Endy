import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1,bgcolor:'grey.800',color:'#fff' }}>
      
        <Toolbar >
        <Typography
            variant="h6"
            component="a"
            href='/'
            LinkComponent={Link}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:'#fff',textDecoration:'none' }}
          >
            Endy Cipher
          </Typography>
          <Button color="inherit">&copy; Copyright 2022-2023</Button>
        </Toolbar>
      
    </Box>
  );
}
