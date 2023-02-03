import Header from '../components/Header'
import Footer from '../components/Footer'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { red,grey, orange,amber, deepOrange } from '@mui/material/colors';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepOrange[500] ,
    },
    secondary: {
      main: grey[50],
    }
    
  },
});





export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
