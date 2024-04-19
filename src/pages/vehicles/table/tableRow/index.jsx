import { Checkbox, TableCell, TableRow } from "@mui/material"

const TableRowVehicles = ({row, isItemSelected, labelId, handleClick}) => {
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.id)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
      sx={{ cursor: 'pointer' }}
  >
    <TableCell padding="checkbox">
      <Checkbox
        color="primary"
        checked={isItemSelected}
        inputProps={{
          'aria-labelledby': labelId,
        }}
      />
    </TableCell>
    <TableCell
      component="th"
      id={labelId}
      scope="row"
      align='left'
      padding="none"
    >
      {row.id}
    </TableCell>
    <TableCell align="left">{row.brand}</TableCell>
    <TableCell align="left">{row.model}</TableCell>
    <TableCell align="left">{row.plate}</TableCell>
    <TableCell align="left">{row.bound ? 'Sim' : 'Não'}</TableCell>
  </TableRow>
  )
}

export default TableRowVehicles