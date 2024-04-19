import { Button, Stack } from '@mui/material'
import TableCustom from '../../components/table'
import TableRowVehicles from './table/tableRow/index'
import { headCellsVehicles } from './table/headCells'
import {rowsVehicles} from './table/rows/index'
import { Add } from '@mui/icons-material'
import { useContext } from 'react'
import RootStoreContext from '../../rootStore'

const VehiclesPage = () => {
  const {vehiclesStore} = useContext(RootStoreContext)
  
  const dataRow = (props) => {
    const {row, isItemSelected, labelId, handleClick} = props;
    
    return (
      <TableRowVehicles
        row={row}
        isItemSelected={isItemSelected}
        labelId={labelId}
        handleClick={handleClick}
      />
    )
  }


  return (
    <Stack height={'100%'}>
      <Stack width={'100%'} alignItems={'end'} my={2}>
        <Button 
          variant={'contained'} 
          startIcon={<Add/>} 
          style={{ textTransform:"capitalize" }}
        >
          Adicionar Veículo
        </Button>
      </Stack>
      <TableCustom
        rows={rowsVehicles}
        dataRow={dataRow}
        headCells={headCellsVehicles}
        />
    </Stack>
  )
}

export default VehiclesPage