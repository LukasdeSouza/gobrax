import { Button, Stack, Typography } from '@mui/material'
import TableCustom from '../../components/table'
import {headCellsDrivers} from './table/headCells'
import TableRowDrivers from './table/tableRow/index'
import { Add } from '@mui/icons-material'
import { useContext, useLayoutEffect, useState } from 'react'
import RootStoreContext from '../../rootStore'
import { LoadingButton } from '@mui/lab'
import FormDataDrivers from './formData'
import ModalEdit from '../../components/modal'
import DriversController from '../../controllers/driversController'
import SelectedData from '../../components/selectedData'
import { observer } from 'mobx-react-lite'


const DriversPage = observer(() => {
  const {driversStore, vehiclesStore} = useContext(RootStoreContext)
  const controller = new DriversController(driversStore, 'drivers')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const onClickDelete = () => {
    setConfirmDelete(true)
    setTimeout(() => {
      setConfirmDelete(false)
    }, 2000)
  }

  const handleDeleteDriver = async () => {
    const driverId = driversStore.state.driver?.id
    await controller.deleteDriver(driverId)
    setConfirmDelete(false)
    setIsModalOpen(false)
  }

  const handleSaveDriver = async (driver) => {
    await controller.addNewDriver(driver)
    setIsModalOpen(false)
  }

  const dataRow = (props) => {
    const {row, isItemSelected, labelId, handleClick} = props;
    
    return (
      <TableRowDrivers
        row={row}
        isItemSelected={isItemSelected}
        labelId={labelId}
        handleClick={() => {
          driversStore.setState('driver', row)
          handleClick()
        }}
        onClickEdit={() => {
          driversStore.setState('driver', row)
          setIsModalOpen(true)
        }}
        onClickDelete={handleDeleteDriver}
      />
    )
  }

  useLayoutEffect(() => {
    controller.getAllDrivers()
  }, [])


  return (
    <Stack height={'100%'}>
      <SelectedData 
        driverName={driversStore.state.driver?.name}
        vehiclePlate={driversStore.state.driver?.vehicle ?? 'Não vínculado'}
      />
        <Stack width={'100%'} alignItems={'end'} my={2}>
        <Button
          variant={'contained'} 
          startIcon={<Add/>} 
          onClick={() => {
            driversStore.setState('driver', {})
            setIsModalOpen(true)
          }}
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
          : <Stack height={'40vh'} alignItems={'center'} justifyContent={'center'}>
              <Typography>Não há dados para exibir</Typography>
            </Stack>
      }
        <ModalEdit
          isModalOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
          title={'Motorista'}
        >
          <FormDataDrivers
            storeItemDriver={driversStore.state.driver}
            storeItemVehicle={vehiclesStore.state.vehiclesList}
            handleSaveDriver={handleSaveDriver}
          />
          <Stack direction='row' justifyContent={'flex-end'} gap={2}>
            {confirmDelete 
            ? <LoadingButton
                color='error'
                variant='outlined'
                loading={driversStore.loading.delete}
                onClick={handleDeleteDriver}
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
              onClick={handleSaveDriver}
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