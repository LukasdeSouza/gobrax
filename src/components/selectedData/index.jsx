import { Divider, Stack, Typography } from "@mui/material"

const SelectedData = ({driverName, vehiclePlate}) => {
  return(
    <Stack width={'100%'} alignItems={'flex-end'} my={1}>
      <Typography variant='body1'>
        Selecionado
      </Typography>
      <Typography fontWeight={600} variant='body2'>
        Motorista: {driverName}
      </Typography>
      <Typography fontWeight={600} variant='body2'>
        Veículo: {vehiclePlate}
      </Typography>
    </Stack>
  )
}

export default SelectedData