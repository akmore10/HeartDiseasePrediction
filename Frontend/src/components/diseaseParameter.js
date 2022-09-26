import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './header'
import Container from '@mui/material/Container';
export default function BasicTextFields() {
  return (
        <Header>
        <Container fixed>
    
        <Box
        component="form"
            noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        </Container>
    </Header>  
    
  );
}

