import { Stack } from '@mui/material'
import TableCustom from '../../components/table'
import TableRowVehicles from './table/tableRow/index'
import { headCellsVehicles } from './table/headCells'
import {rowsVehicles} from './table/rows/index'

const VehiclesPage = () => {
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
      <TableCustom
        rows={rowsVehicles}
        dataRow={dataRow}
        headCells={headCellsVehicles}
        />
    </Stack>
  )
}

export default VehiclesPage