import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link, Stack } from '@mui/material';
import goBraxLogo from '../../assets/goBrax_logo.png'

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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