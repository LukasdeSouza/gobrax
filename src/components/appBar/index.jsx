import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Link, Stack } from '@mui/material';
import goBraxLogo from '../../assets/goBrax_logo.png'

export default function MenuAppBar() {





  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        elevation={0} 
        position="static" 
        style={{backgroundColor:"#FFF"}}
      >
        <Toolbar 
          component={'div'} 
          style={{
            display:'flex', 
            flexDirection:"row", 
            justifyContent:'space-between',
          }}
        >
          <Stack direction='inherit' gap={4}>
            <Link 
              href='/drivers' 
              underline='hover' 
              variant='body1'
              color='#000'
              fontWeight={700}
            >
              Motoristas
            </Link>
            <Link 
              href='/vehicles' 
              underline='hover' 
              variant="body1" 
              color='#000'
              fontWeight={700}
            >
              Veículos
            </Link>
          </Stack>
          <img src={goBraxLogo} alt='Logo da goBrax' style={{width: 200}}/>
          <Button 
            variant='contained'
            onClick={() => window.open('https://www.linkedin.com/in/lucas-de-souza-silva-227185211/', "_blank")}
            style={{
              textTransform:'capitalize',
              backgroundColor: '#1323b0'
            }}
          >
            Linkedin
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}