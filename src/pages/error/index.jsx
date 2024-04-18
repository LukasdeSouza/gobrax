import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box height={'100vh'}>
      <Stack spacing={2} height={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Typography variant='h4' fontWeight={600}>Desculpe!</Typography>
        <Typography variant='body1'>Não foi possível acessar essa página.</Typography>
        <Typography variant='body2'>
          <i>{error.statusText || error.message}</i>
        </Typography>
      <Button 
        variant='contained'
        onClick={() => navigate(-1)}
        style={{width: 200}}
      >
        Voltar
      </Button>
      </Stack>
    </Box>
  )
}

export default ErrorPage