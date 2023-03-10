import { AppBar, Button, CssBaseline, Grid, Typography, Divider, } from "@mui/material"
import { ThemeProvider, createTheme ,styled} from '@mui/material/styles';
import { Box, fontWeight } from "@mui/system"
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link as MuiLink } from '@mui/material'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksThreeIcon from '@mui/icons-material/LooksTwo';
import LooksfourIcon from '@mui/icons-material/LooksTwo';
import LooksOneIcon from '@mui/icons-material/LooksOne';
  const StyledLink= styled(Link)(({ theme }) => ({
    
    color:'#fff', textDecoration: 'none', lineHeight: 3 
    
  }));
  const StyledItem= styled(ListItem)(({ theme }) => ({
    
    color:'#fff', textDecoration: 'none', lineHeight: 3 
    
  }));

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Endy Cipher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline>
        <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ bgcolor: '#01020a' }}>
          <Box>
            <Typography variant="h4" gutterBottom>THE WAY TO SECURITY </Typography>
            <Typography variant='body1' sx={{ lineHeight: 2, fontSize: 20, color: 'grey.500', mb: 3 }}>
              Encryption and decryption became easy<br />
              with endy cipher you will learn alogirthms <br />
              to encryypt and decrypt texts and images.
            </Typography>
            
            <Button variant="contained" onClick={handleClickOpen} size="large"  >
              Explore
            </Button>
            <div>

              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title" >
                  {"We offer these encryption algorithms"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    



    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <StyledItem disablePadding  component={Link} href="/caeser">
            <ListItemButton>
              <ListItemIcon>
                <LooksOneIcon/>
              </ListItemIcon>
              <ListItemText primary="Caeser" />
            </ListItemButton>
          </StyledItem>
          <StyledItem disablePadding  component={Link} href="/monoalphabetic">
            <ListItemButton>
              <ListItemIcon>
                <LooksTwoIcon/>
              </ListItemIcon>
              <ListItemText  primary="Monoalphapetic" />
            </ListItemButton>
          </StyledItem>
          <StyledItem disablePadding  component={Link} href="/polyalphabetic">
            <ListItemButton>
              <ListItemIcon>
                <LooksThreeIcon/>
              </ListItemIcon>
              <ListItemText primary="Polyalphapetic" />
            </ListItemButton>
          </StyledItem>
          <StyledItem disablePadding  component={Link} href="/playfair">
            <ListItemButton>
              <ListItemIcon>
                <LooksfourIcon/>
              </ListItemIcon>
              <ListItemText primary="Playfair" />
            </ListItemButton>
          </StyledItem>
        </List>
      </nav>
      
    </Box>
  


                    {/* <StyledLink href={'caeser'}   >Caeser Cipher</StyledLink>
                    <Divider />
                    <StyledLink href={'monoalphabetic'} >Monoalphabetic Cipher</StyledLink>
                    <Divider />
                    <StyledLink href={'polyalphabetic'} >Polyalphabetic Cipher</StyledLink>
                    <Divider />
                    <StyledLink href={'playfair'} >Playfair Cipher</StyledLink> */}

                  </DialogContentText>
                </DialogContent>

              </Dialog>
            </div>
          </Box>
          <Box >
            <img src='/1.gif' alt="landing image" height="580" />
          </Box>
        </Grid>
      </CssBaseline>
    </>
  )
}



