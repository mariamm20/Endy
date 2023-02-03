import * as React from 'react';
import { useRef } from 'react';
import { Box, Grid, Typography, TextField, Button, Divider } from '@mui/material'

let normalChar
= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let codedChar
  = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
    'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
    'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

function encrypt(s) {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 26; j++) {

      
        if (s.charAt(i) == normalChar[j])
        {
            result += codedChar[j];
            break;
        }

      
        if (s.charAt(i) < 'a' || s.charAt(i) > 'z')
        {
            result += s.charAt(i);
            break;
        }
    }
}
  return result;
}

function decrypt(s) {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 26; j++) {

      
        if (s.charAt(i) == codedChar[j])
        {
            
            result += normalChar[j];
            break;
        }

        
        if (s.charAt(i) < 'A' || s.charAt(i) > 'Z')
        {
            result += s.charAt(i);
            break;
        }
    }
}

  return result;
}

export default function caeser() {
  const textRef = useRef();

  
  const encryptRef = useRef();
  

  let handleencrypt = () => {

    document.getElementById('ecnrypted').innerHTML = encrypt(textRef.current.value);
  }
  let handleDecypt = () => {
   
    document.getElementById('decrypted').innerHTML = decrypt(encryptRef.current.value);
  }

  return (
    <>
      <Typography variant="h4" component='div' align='center' sx={{ mt: 5, mb: 2 }}>
        MONOALPHABETIC
      </Typography>

      <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: '70vh' }}>
        <Box >
          <Typography variant="h5" component='div' sx={{ mt: 5, mb: 2 }}>
            Encryption
          </Typography>
          <Divider sx={{ width: 120, height: 3, borderBottomWidth: '3px' }} />
          <TextField
            label="Text"
            variant="standard"

            inputRef={textRef}
            sx={{ my: 3, width: 300 }}

          />
          <br />
          
          <Button onClick={handleencrypt} variant="contained" size="large" sx={{ width: 300, ':hover': { color: '#ed6c02', bgcolor: '#fff', borderColor: 'primary' } }} >
            Encrypt
          </Button>
          <Typography variant="h6" component='div' id="ecnrypted" sx={{ my: 5, border: 1, py: 3, px: 2, borderRadius: 2 }}>
            Encrypted Text
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem ></Divider>
        <Box>
          <Typography variant="h5" component='div' sx={{ mt: 5, mb: 2 }}>
            Decryption
          </Typography>
          <Divider sx={{ width: 120, height: 3, borderBottomWidth: '3px' }} />
          <Divider orientation="vertical" flexItem></Divider>
          <TextField
            label="Text"
            variant="standard"

            inputRef={encryptRef}
            sx={{ my: 3, width: 300 }}

          />
          <br />
          
          <Button onClick={handleDecypt} variant="contained" size="large" sx={{ width: 300, ':hover': { color: '#ed6c02', bgcolor: '#fff', borderColor: 'primary' } }} >
            Decrypt
          </Button>
          <Typography variant="h6" component='div' id="decrypted" sx={{ my: 5, border: 1, py: 3, px: 2, borderRadius: 2 }}>
            Decrypted Text
          </Typography>
        </Box>

      </Grid>
    </>
  );
}
