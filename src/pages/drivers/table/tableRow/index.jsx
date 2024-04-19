import { Checkbox, TableCell, TableRow } from "@mui/material"

const TableRowDrivers = ({row, isItemSelected, labelId, handleClick}) => {
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row)}
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
    <TableCell align="left">{row.name}</TableCell>
    <TableCell align="left">{row.document}</TableCell>
    <TableCell align="left">{row.bound === 'yes' ? 'Sim' : 'Não'}</TableCell>
  </TableRow>
  )
}

export default TableRowDrivers