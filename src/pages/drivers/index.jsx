import { Button, Stack } from '@mui/material'
import TableCustom from '../../components/table'
import {headCellsDrivers} from './table/headCells'
import TableRowDrivers from './table/tableRow/index'
import { rowsDrivers } from './table/rows'
import { Add } from '@mui/icons-material'
import { useContext, useState } from 'react'
import RootStoreContext from '../../rootStore'
import { LoadingButton } from '@mui/lab'
import FormDataDrivers from './formData'
import ModalEdit from '../../components/modal'


const DriversPage = () => {
  const {driversStore} = useContext(RootStoreContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const onClickDelete = () => {
    setConfirmDelete(true)
    setTimeout(() => {
      setConfirmDelete(false)
    }, 2000)
  }

  const handleDeleteVehicle = () => {
    setConfirmDelete(false)
  }
  

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
          onClick={() => setIsModalOpen(true)}
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
        <ModalEdit
          isModalOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
          title={'Motorista'}
        >
          <FormDataDrivers
            onSavePassword={() => {}}
          />
          <Stack direction='row' justifyContent={'flex-end'} gap={2}>
            {confirmDelete 
            ? <LoadingButton
                color='error'
                variant='outlined'
                loading={driversStore.loading.delete}
                onClick={handleDeleteVehicle}
                style={{textTransform:'capitalize'}}
              >
                Confirmar Deleção ?
              </LoadingButton>
              : <Button
                  onClick={onClickDelete}
                  color='error'
                  variant='outlined'
                  style={{textTransform:'capitalize'}}
                >
                  Deletar
                </Button>
            }
            <LoadingButton
              variant='contained'
              loading={driversStore.loading.save}
              style={{textTransform:'capitalize'}}
            >
              Salvar
            </LoadingButton>
          </Stack>
        </ModalEdit>
    </Stack>
  )
}

export default DriversPage