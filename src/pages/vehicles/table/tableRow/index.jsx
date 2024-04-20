import { Delete, Edit } from "@mui/icons-material"
import { Checkbox, IconButton, Stack, TableCell, TableRow } from "@mui/material"

const TableRowVehicles = ({row, isItemSelected, labelId, handleClick, onClickEdit, onClickDelete}) => {
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
    <TableCell align="left">{row?.brand}</TableCell>
    <TableCell align="left">{row?.model}</TableCell>
    <TableCell align="left">{row?.plate}</TableCell>
    <TableCell align="left">{row?.bound ? 'Sim' : 'Não'}</TableCell>
    <TableCell align="left" width={100}>
      <Stack direction='row'>
        <IconButton size="small" onClick={onClickEdit}>
          <Edit/>
        </IconButton>
        <IconButton size="small" onClick={onClickDelete}>
          <Delete/>
        </IconButton>
      </Stack>
    </TableCell>
  </TableRow>
  )
}

export default TableRowVehicles