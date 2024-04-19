import { Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import InputTextController from '../../../components/inputs/inputTextController'
import InputSelectController from "../../../components/inputs/inputSelectController"
import { useEffect } from "react"

const FormDataDrivers = ({onSaveDriver}) => {
  const { control, watch, setValue,  handleSubmit } = useForm({
    defaultValues: {
      bound: '',
      vehicle: ''
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
        nameField={'name'}
        control={control}
        label={'Nome'}
        required
      />
      <InputTextController
        nameField={'document'}
        control={control}
        label={'Documento'}
        required
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
          nameField={'vehicle'}
          control={control}
          label="Veículo Vinculado"
          menuItemList={[
            {key: 'volvo', label: 'Volvo', value: 'volvo'},
            {key: 'scania', label: 'Scania', value: 'scania'}
          ]}
        />
      }
    </Stack>
  )
}

export default FormDataDrivers