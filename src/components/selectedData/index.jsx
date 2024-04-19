import { Stack, Typography } from "@mui/material"

const SelectedData = ({driverName, vehiclePlate}) => {
  return(
    <Stack width={'100%'} alignItems={'flex-end'}>
      <Typography variant='body1'>
        Selecionado
      </Typography>
      <Typography variant='body1'>
        Motorista: {driverName}
      </Typography>
      <Typography variant='body1'>
        Veículo: {vehiclePlate}
      </Typography>
    </Stack>
  )
}

export default SelectedData