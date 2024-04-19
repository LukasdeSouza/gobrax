import { Box, Button, Container, Modal, Slide, Stack, Typography } from '@mui/material'
import TableCustom from '../../components/table'
import TableRowVehicles from './table/tableRow/index'
import { headCellsVehicles } from './table/headCells'
import {rowsVehicles} from './table/rows/index'
import { Add } from '@mui/icons-material'
import { useContext, useState } from 'react'
import RootStoreContext from '../../rootStore'
import ModalEdit from '../../components/modal'
import FormDataVehicles from './formData'
import { LoadingButton } from '@mui/lab'

const VehiclesPage = () => {
  const {vehiclesStore} = useContext(RootStoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <TableRowVehicles
        row={row}
        isItemSelected={isItemSelected}
        labelId={labelId}
        handleClick={handleClick}
      />
    )
  }



  return (
    <Box>
      <Stack height={'100%'}>
        <Stack width={'100%'} alignItems={'end'} my={2}>
          <Button 
            variant={'contained'}
            startIcon={<Add/>}
            onClick={() => setIsModalOpen(true)}
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
        <ModalEdit
          isModalOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
          title={'Veículos'}
        >
          <FormDataVehicles
            onSavePassword={() => {}}
          />
          <Stack direction='row' justifyContent={'flex-end'} gap={2}>
            {confirmDelete 
            ? <LoadingButton
                color='error'
                variant='outlined'
                loading={vehiclesStore.loading.delete}
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
              loading={vehiclesStore.loading.save}
              style={{textTransform:'capitalize'}}
            >
              Salvar
            </LoadingButton>
          </Stack>
        </ModalEdit>
    </Box>
  )
}

export default VehiclesPage