import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Stack } from '@mui/material';
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
        style={{backgroundColor:"#FFF", color: "#111"}}
      >
        <Toolbar 
          component={'div'} 
          style={{
            display:'flex', 
            flexDirection:"row", 
            justifyContent:'space-between'
          }}
        >
          <Stack direction='inherit' gap={4}>
            <Typography variant="body1" component="div" fontWeight={700}>
              Motoristas
            </Typography>
            <Typography variant="body1" component="div" fontWeight={700}>
              Veículos
            </Typography>
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