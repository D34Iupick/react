import { createTheme } from '@mui/material/styles';


export const ThemeLigthDark = createTheme({
  colorSchemes: {
    dark:{
      palette: {
        mode: 'dark',
        primary: {
          main: '#361c8a',
        },
        secondary: {
          main: '#cd32f5',
        },
        background: {
          default: '#031731',
          paper: '#0b2946',
        },
        text: {
          secondary: 'rgba(117,141,255,0.6)',
          hint: '#bedbf3',
          primary: '#8ab6ef',
          disabled: 'rgba(255,166,166,0.5)',
        },
      },
    },
    light:{
      palette: {
        mode: 'light',
        primary: {
          main: '#3e57d4',
          dark: '#207dbd',
          light: '#547d9a',
        },
        secondary: {
          main: '#e91e63',
        },
        background: {
          default: '#aac5f5',
          paper: '#87b4dc',
        },
        text: {
          secondary: 'rgba(38,57,113,0.69)',
          hint: '#bedbf3',
          primary: '#031731',
          disabled: 'rgba(33,77,113,0.5)',
        },
 
      },
    },
    
  },
});


