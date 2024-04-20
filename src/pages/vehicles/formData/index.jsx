import { Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import InputTextController from '../../../components/inputs/inputTextController'
import InputSelectController from "../../../components/inputs/inputSelectController"
import { useEffect } from "react"

const FormDataVehicles = ({onSaveVehicle}) => {
  const { control, watch, setValue,  handleSubmit } = useForm({
    defaultValues: {
      bound: '',
      driver: ''
    }
  })

  useEffect(() => {
    console.log(watch('bound'))
  }, [watch('bound')])

  return(
    <Stack
      component={'form'}
      height={'100%'}
      paddingRight={1}
      marginBottom={3}
      marginRight={-1}
      onSubmit={handleSubmit(() => onSavePassword({...control._formValues}))}
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
        nameField={'modelo'}
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