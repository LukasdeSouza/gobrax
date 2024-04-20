import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import TableCustom from '../../components/table'
import TableRowVehicles from './table/tableRow/index'
import { headCellsVehicles } from './table/headCells'
import { Add } from '@mui/icons-material'
import { useContext, useLayoutEffect, useState } from 'react'
import RootStoreContext from '../../rootStore'
import ModalEdit from '../../components/modal'
import FormDataVehicles from './formData'
import { LoadingButton } from '@mui/lab'
import VehiclesController from '../../controllers/vehiclesController'
import { useForm } from 'react-hook-form'
import SelectedData from '../../components/selectedData'
import { observer } from 'mobx-react-lite'

const VehiclesPage = observer(() => {
  const {vehiclesStore, driversStore} = useContext(RootStoreContext);
  const controller = new VehiclesController(vehiclesStore, 'vehicles')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false)

  const { control, watch, setValue,   } = useForm()

  const onClickDelete = () => {
    setConfirmDelete(true)
    setTimeout(() => {
      setConfirmDelete(false)
    }, 2000)
  }

  const handleDeleteVehicle = async () => {
    const vehicleId = vehiclesStore.state.vehicle?.id
    console.log('vehicleId', vehicleId)
    setLoadingDelete(true)

    await controller.deleteVehicle(vehicleId).then(() => {
      controller.getAllVehicles()
      location.reload()
    })
    setConfirmDelete(false)
    setLoadingDelete(false)
    setIsModalOpen(false)
  }

  const handleSaveVehicles = async () => {
    const vehicles = {...control._formValues}

    setLoadingSave(true)
    if (vehicles?.id) {
      await controller.updateVehicle(vehicles?.id, vehicles)
    } else {
      await controller.addNewVehicle(vehicles)
    }
    await controller.getAllVehicles()
    location.reload()
    setLoadingSave(false)
    setIsModalOpen(false)
  }

  const dataRow = (props) => {
    const {row, isItemSelected, labelId, handleClick} = props;
    
    return (
      <TableRowVehicles
        row={row}
        isItemSelected={isItemSelected}
        labelId={labelId}
        handleClick={() => {
          vehiclesStore.setState('vehicle', row)
          handleClick()
        }}
        onClickEdit={() => {
          vehiclesStore.setState('vehicle', row)
          setIsModalOpen(true)
        }}
        onClickDelete={handleDeleteVehicle}
      />
    )
  }

  useLayoutEffect(() => {
    controller.getAllVehicles()
  }, [])



  return (
    <Stack>
      <Stack height={'100%'}>
      <SelectedData 
        driverName={vehiclesStore.state.vehicle?.driver ?? 'Não informado'}
        vehiclePlate={vehiclesStore.state.vehicle?.plate ?? 'Não vínculado'}
      />
        <Stack width={'100%'} alignItems={'end'} my={2}>
          <Button 
            variant={'contained'}
            startIcon={<Add/>}
            onClick={() => {
              vehiclesStore.setState('vehicle', {})
              setIsModalOpen(true)
            }}
            style={{ textTransform:"capitalize" }}
          >
            Adicionar Veículo
          </Button>
        </Stack>
        {vehiclesStore.state.vehiclesList.length > 0 
        ? <TableCustom
            rows={vehiclesStore.state.vehiclesList}
            dataRow={dataRow}
            headCells={headCellsVehicles}
          />
          : vehiclesStore.loading.list
          ? <Stack height={'100%'} alignItems={'center'} justifyContent={'center'}>
              <CircularProgress color='primary'/>
             </Stack>
            : <Stack height={'40vh'} alignItems={'center'} justifyContent={'center'}>
              <Typography>Não há dados para exibir</Typography>
            </Stack>
        }

      </Stack>
        <ModalEdit
          isModalOpen={isModalOpen}
          handleCloseModal={() => setIsModalOpen(false)}
          title={'Veículos'}
        >
          <FormDataVehicles
            control={control}
            setValue={setValue}
            watch={watch}
            storeItemVehicle={vehiclesStore.state.vehicle}
            storeItemDriver={driversStore.state.driversList}
          />
          <Stack direction='row' justifyContent={'flex-end'} gap={2}>
            {confirmDelete 
            ? <LoadingButton
                color='error'
                variant='outlined'
                loading={loadingDelete}
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
              loading={loadingSave}
              onClick={handleSaveVehicles}
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

export default VehiclesPage