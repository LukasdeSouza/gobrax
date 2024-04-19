import { Stack } from '@mui/material'
import TableCustom from '../../components/table'
import {headCellsDrivers} from './table/headCells'
import TableRowDrivers from './table/tableRow/index'
import { rowsDrivers } from './table/rows'


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
      <TableCustom
        rows={rowsDrivers}
        headCells={headCellsDrivers}
        dataRow={dataRow}
        // rows={rowsDrivers}
      />
    </Stack>
  )
}

export default DriversPage