import { Box, Button, Container, Modal, Slide, Stack, Typography } from '@mui/material'
import TableCustom from '../../components/table'
import TableRowVehicles from './table/tableRow/index'
import { headCellsVehicles } from './table/headCells'
import {rowsVehicles} from './table/rows/index'
import { Add } from '@mui/icons-material'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import RootStoreContext from '../../rootStore'
import ModalEdit from '../../components/modal'
import FormDataVehicles from './formData'
import { LoadingButton } from '@mui/lab'
import { serviceApi } from '../../service'
import VehiclesController from '../../controllers/vehiclesController'
import { useForm } from 'react-hook-form'
import SelectedData from '../../components/selectedData'

const VehiclesPage = () => {
  const {vehiclesStore, driversStore} = useContext(RootStoreContext);
  const controller = new VehiclesController(vehiclesStore)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false)

  const { control, watch, setValue,   } = useForm()

  const onClickDelete = () => {
    setConfirmDelete(true)
    setTimeout(() => {
      setConfirmDelete(false)
    }, 2000)
  }

  const handleDeleteVehicle = () => {
    setConfirmDelete(false)
  }

  const handleSaveVehicles = async () => {
    const vehicles = {...control._formValues}

    if (vehicles?.id) {
      await controller.updateDriver(vehicles?.id, vehicles)
    } else {
      await controller.addNewDriver(vehicles)
    }
    setIsModalOpen(false)
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

  useLayoutEffect(() => {
    controller.getAllVehicles()
  }, [])



  return (
    <Stack>
      <Stack height={'100%'}>
      <SelectedData 
        driverName={vehiclesStore.state.driver}
        vehiclePlate={vehiclesStore.state.plate ?? 'Não vínculado'}
      />
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
          rows={vehiclesStore.state.vehiclesList}
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

export default VehiclesPage