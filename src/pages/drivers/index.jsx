import { Button, Stack, Typography } from '@mui/material'
import TableCustom from '../../components/table'
import {headCellsDrivers} from './table/headCells'
import TableRowDrivers from './table/tableRow/index'
import { rowsDrivers } from './table/rows'
import { Add } from '@mui/icons-material'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import RootStoreContext from '../../rootStore'
import { LoadingButton } from '@mui/lab'
import FormDataDrivers from './formData'
import ModalEdit from '../../components/modal'
import DriversController from '../../controllers/driversController'
import { observer } from 'mobx-react-lite'


const DriversPage = observer(() => {
  const {driversStore} = useContext(RootStoreContext)
  const controller = new DriversController(driversStore, 'drivers')
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
        handleClick={(_, row) => {
          setIsModalOpen(true)
          driversStore.setState('driver', row)
        }}
      />
    )
  }

  useLayoutEffect(() => {
    controller.getAllDrivers()
  }, [])


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
      {driversStore.state.driversList.length > 0 
        ? <TableCustom
            rows={driversStore.state.driversList}
            headCells={headCellsDrivers}
            dataRow={dataRow}
          />
          : <Stack height={'100%'} alignItems={'center'} justifyContent={'center'}>
              <Typography>Não há dados para exibir</Typography>
            </Stack>
      }
        <ModalEdit
          isModalOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
          title={'Motorista'}
        >
          <FormDataDrivers
            storeItem={driversStore.state.driver}
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
)

export default DriversPage