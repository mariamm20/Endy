import * as React from 'react';
import { useRef } from 'react';
import { Box, Grid, Typography, TextField, Button,Divider } from '@mui/material'

function encrypt(text, s)
    {
        let result=""
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if (char.toUpperCase(text[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }

    function decrypt(text, s)
    {
        let result=""
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if (char.toUpperCase(text[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) - s+65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) - s+97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }

export default function caeser() {
  const textRef = useRef();
  
  const keyRef = useRef();
  const encryptRef = useRef();
  const keyencryptRef = useRef();
  
  let handleencrypt = ()=>{

    document.getElementById('ecnrypted').innerHTML = encrypt(textRef.current.value,Number( keyRef.current.value));
  }
  let handleDecypt = ()=>{
    document.getElementById('decrypted').innerHTML = decrypt(encryptRef.current.value,Number( keyencryptRef.current.value));
  }

  return (
    <>
    <Typography variant="h4" component='div' align='center' sx={{mt:5,mb:2}}>
          CAESER
        </Typography>
    <Grid container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{height:'70vh' }}>
      <Box >
        <Typography variant="h5" component='div' sx={{mt:5,mb:2}}>
          Encryption
        </Typography>
        <Divider  sx={{width:120,height:3,borderBottomWidth: '3px'}}  />
        <TextField
          label="Text"
          variant="standard"
          inputRef={textRef}
          sx={{my:3,width:300 }}
          
        />
        <br />
        <TextField label="Key"
          variant="standard"
          
          id='keyencrypt'
          inputRef={keyRef}
          sx={{my:3,width:300 }}
           inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /><br />
        <Button onClick={handleencrypt} variant="contained" size="large" sx={{width:300,  ':hover': { color: '#ed6c02', bgcolor: '#fff', borderColor: 'primary' } }} >
          Encrypt
        </Button>
        <Typography variant="h6" component='div' id="ecnrypted"sx={{my:5,border: 1,py:3,px:2,borderRadius:2 }}>
          Encrypted Text
        </Typography>
      </Box>
      <Divider orientation="vertical" ></Divider>
      <Box>
      <Typography variant="h5" component='div' sx={{mt:5,mb:2}}>
          Decryption
        </Typography>
        <Divider sx={{width:120,height:3,borderBottomWidth: '3px'}} />
        
        <TextField
          label="Text"
          variant="standard"
          
          inputRef={encryptRef}
          sx={{my:3,width:300 }}
          
        />
        <br />
        <TextField label="Key"
          variant="standard"
          
          inputRef={keyencryptRef}
          sx={{my:3,width:300 }}
           inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /><br />
        <Button onClick={handleDecypt} variant="contained" size="large" sx={{ width:300, ':hover': { color: '#ed6c02', bgcolor: '#fff', borderColor: 'primary' } }} >
          Decrypt
        </Button>
        <Typography variant="h6" component='div' id="decrypted" sx={{my:5,border: 1,py:3,px:2,borderRadius:2 }}>
          Decrypted Text
        </Typography>
      </Box>

    </Grid>
    </>
  );
}
