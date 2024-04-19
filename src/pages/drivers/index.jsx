import { Button, Stack } from '@mui/material'
import TableCustom from '../../components/table'
import {headCellsDrivers} from './table/headCells'
import TableRowDrivers from './table/tableRow/index'
import { rowsDrivers } from './table/rows'
import { Add } from '@mui/icons-material'


const DriversPage = () => {
  const dataRow = (props) => {
    const {row, isItemSelected, labelId, handleClick} = props;
    
    return (
      <TableRowDrivers
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
          Adicionar Motorista
          </Button>
      </Stack>
      <TableCustom
        rows={rowsDrivers}
        headCells={headCellsDrivers}
        dataRow={dataRow}
      />
    </Stack>
  )
}

export default DriversPage