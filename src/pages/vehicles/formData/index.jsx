import { Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import InputTextController from '../../../components/inputs/inputTextController'
import InputSelectController from "../../../components/inputs/inputSelectController"
import { useEffect } from "react"

const FormDataVehicles = ({control, watch, setValue, storeItemVehicle, storeItemDriver}) => {

  const loadData = () => {
    Object.keys(storeItemVehicle).forEach(key => {
      setValue(key, storeItemVehicle[key] ?? '', { shouldValidate: false });
    });
  }

  useEffect(() => {
    if (Object.keys(storeItemVehicle)?.length > 0) {
      loadData()
    } else {
      setValue('brand', '')
      setValue('plate', '')
      setValue('model', '')
      setValue('bound', '')
      setValue('driver', '')
    }
  }, [])

  return(
    <Stack
      height={'100%'}
      paddingRight={1}
      marginBottom={3}
      marginRight={-1}
      gap={3}
    >
      <InputTextController
        nameField={'brand'}
        control={control}
        label={'Marca'}
        required
      />
      <InputTextController
        nameField={'plate'}
        control={control}
        label={'Placa'}
        required
      />
      <InputTextController
        nameField={'model'}
        control={control}
        label={'Modelo'}
      />
      <InputSelectController
        nameField={'bound'}
        control={control}
        label="Vinculado"
        required
        menuItemList={[
          { key: 'yes', label: 'Sim', value: 'yes'},
          { key: 'no', label: 'Não', value: 'no'}
        ]}
      />
      {watch('bound') === 'yes' && 
        <InputSelectController
          nameField={'driver'}
          control={control}
          label="Motorista Vinculado"
          menuItemList={[
            {key: 'fernando', label: 'fernando', value: 'fernando'}
          ]}
        />
      }
    </Stack>
  )
}

export default FormDataVehicles