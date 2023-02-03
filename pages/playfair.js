import * as React from 'react';
import { useRef } from 'react';
import { Box, Grid, Typography, TextField, Button,Divider } from '@mui/material'


function encrypt(plaintext, keysquare)
{ 
    if(keysquare.length != 25){ alert("keysquare must be 25 characters in length"); return; }
    while(plaintext.length % 2 != 0) plaintext += "x";
    let ciphertext = "";
    
    for(let i=0; i<plaintext.length; i+=2){let c,d;
        let a = plaintext.charAt(i); let b = plaintext.charAt(i+1); 
        if(a == b) b = "x";
        let row1 = parseInt(keysquare.indexOf(a) / 5);
        let col1 = keysquare.indexOf(a) % 5;
        let row2 = parseInt(keysquare.indexOf(b) / 5);
        let col2 = keysquare.indexOf(b) % 5;
        console.log(row1)
        if(row1 == row2){
          
            if(col1 == 4) c = keysquare.charAt(row1*5);
            else  c = keysquare.charAt(row1*5 + col1 + 1);
            if(col2 == 4) d = keysquare.charAt(row2*5);
            else d = keysquare.charAt(row2*5 + col2 + 1);
        }else if(col1 == col2){
            if(row1 == 4) c = keysquare.charAt(col1);
            else c = keysquare.charAt((row1+1)*5 + col1);
            if(row2 == 4) d = keysquare.charAt(col2);
            else d = keysquare.charAt((row2+1)*5 + col2);
        }else{
            c = keysquare.charAt(row1*5 + col2);
            d = keysquare.charAt(row2*5 + col1);
        }
        
        ciphertext += c + d;
    }
    return ciphertext.toUpperCase();
}
function decrypt(ciphertext, keysquare)
{
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }   
    if(ciphertext.length % 2 != 0){ alert("ciphertext length must be even."); return; }    
    if(keysquare.length != 25){ alert("keysquare must be 25 characters in length"); return; }

    let plaintext = "";
    
    for(let i=0; i<ciphertext.length; i+=2){let c,d;
        let a = ciphertext.charAt(i); let b = ciphertext.charAt(i+1); 
        let row1 = parseInt(keysquare.indexOf(a) / 5);
        let col1 = keysquare.indexOf(a) % 5;
        let row2 = parseInt(keysquare.indexOf(b) / 5);
        let col2 = keysquare.indexOf(b) % 5;
        if(row1 == row2){
            if(col1 == 0) c = keysquare.charAt(row1*5 + 4);
            else c = keysquare.charAt(row1*5 + col1 - 1);
            if(col2 == 0) d = keysquare.charAt(row2*5 + 4);
            else d = keysquare.charAt(row2*5 + col2 - 1);
        }else if(col1 == col2){
            if(row1 == 0) c = keysquare.charAt(20 + col1);
            else c = keysquare.charAt((row1-1)*5 + col1);
            if(row2 == 0) d = keysquare.charAt(20 + col2);
            else d = keysquare.charAt((row2-1)*5 + col2);
        }else{
            c = keysquare.charAt(row1*5 + col2);
            d = keysquare.charAt(row2*5 + col1);
        }
        plaintext += c + d;
    }
    return plaintext.toUpperCase();
}

/*Playfair Cipher using a 6x6 grid to support numbers*/
//Get input and passkey

// function encrypt(input, passkey){

// let output = '';
// const gridChars = 'abcdefghijklmnopqrstuvwxyz0123465789';

// //Removes duplicate characters from string. Will need this function later.
// const removeDuplicateCharacters = (string) => {
//     return string
//         .split('')
//         .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//         })
//         .join('');
//        }

// // Clean input
//     input = input.toLowerCase();
//     input = input.replace(/[^a-zA-Z0-9]/g, '');
// if (input.length%2 != 0) {
//     input += 'z';
// };

// //Group characters into pairs for encoding
// let inputArray = [];
// for (let i = 0; i < input.length; i += 2) {
//     let subArray = [input[i], input[i+1]];
//     inputArray.push(subArray);
// };

// //Clean passkey (needs no spaces, special characters, or duplicate characters)
//     passkey = passkey.toLowerCase();
//     passkey = passkey.replace(/[^a-z0-9]/g,'');
//     passkey = passkey += gridChars;
//     passkey = removeDuplicateCharacters(passkey);

// //Generates playfair grid
// let playfairArray = [];
// for (let i = 0; i < passkey.length; i += 6) {
//     let subArray = [passkey[i], passkey[i+1], passkey[i+2], passkey[i+3], passkey[i+4], passkey[i+5]];
//     playfairArray.push(subArray);
// }

// // need to find playfair coordinates of input character pairs stored in each input subarray, stay in same playfair subarray and switch indexes
// for (let i = 0; i < inputArray.length; i++) {
//     let char1 = inputArray[i][0];
//     let char2 = inputArray[i][1];
//     let pos1;
//     let pos2;
//     let row1;
//     let row2;
//     for (let y = 0; y < playfairArray.length; y++) {
//         for (let x = 0; x < playfairArray[y].length; x++) {
//             if (char1 === char2 && char1 === playfairArray[y][x]) {
//                 pos1 = x;
//                 pos2 = x;
//                 row1 = y;
//                 row2 = y;
//             } else if (char1 === playfairArray[y][x]) {
//                 pos2 = x;
//                 row1 = y;
//             } else if (char2 === playfairArray[y][x]) {
//                 pos1 = x;
//                 row2 = y;
//             }
//         }
//     }
//     output += playfairArray[row1][pos1] + playfairArray[row2][pos2];
// }

// return output
// }
    
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
          Playfair
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
