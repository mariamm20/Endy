import * as React from 'react';
import { useRef } from 'react';
import { Box, Grid, Typography, TextField, Button,Divider } from '@mui/material'

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encrypt(text, s)
    {
      text = text.toUpperCase();
      s = s.toUpperCase();
      let len = text.length;
 
      // generating the keystream
      let newKey = s.concat(text);
      newKey = newKey.substring(0, newKey.length - s.length);
      let result = "";

      // applying encryption algorithm
      for (let x = 0; x < len; x++) {
          let first = alphabet.indexOf(text.charAt(x));
          let second = alphabet.indexOf(newKey.charAt(x));
          let total = (first + second) % 26;
          result += alphabet.charAt(total);
      }
        return result;
    }

    function decrypt(text, s)
    {
      text = text.toUpperCase();
      s = s.toUpperCase();
      let currentKey = s;
        let result = "";
 
        // applying decryption algorithm
        for (let x = 0; x < text.length; x++) {
            let get1 = alphabet.indexOf(text.charAt(x));
            let get2 = alphabet.indexOf(currentKey.charAt(x));
            let total = (get1 - get2) % 26;
            total = (total < 0) ? total + 26 : total;
            result += alphabet.charAt(total);
            currentKey += alphabet.charAt(total);
        }
        return result;
    }

export default function caeser() {
  const textRef = useRef();
  
  const keyRef = useRef();
  const encryptRef = useRef();
  const keyencryptRef = useRef();
  
  let handleencrypt = ()=>{

    document.getElementById('ecnrypted').innerHTML = encrypt(textRef.current.value,keyRef.current.value);
  }
  let handleDecypt = ()=>{
    document.getElementById('decrypted').innerHTML = decrypt(encryptRef.current.value,keyencryptRef.current.value);
  }

  return (
    <>
    <Typography variant="h4" component='div' align='center' sx={{mt:5}}>
          POLYALPHAPETIC
        </Typography>
        <Typography variant="body1" component='div' align='center' sx={{mt:1,mb:2}}>
          (AutoKey)
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
