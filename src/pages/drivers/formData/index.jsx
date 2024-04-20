import { Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import InputTextController from '../../../components/inputs/inputTextController'
import InputSelectController from "../../../components/inputs/inputSelectController"
import { useEffect } from "react"
import { validateDocument } from "../../../utils/validate"
import { cpfMask } from "../../../utils/masks"

const FormDataDrivers = ({storeItemDriver, storeItemVehicle, handleSaveDriver}) => {
  const { control, watch, setValue,  handleSubmit } = useForm({
    defaultValues: {
      bound: '',
      vehicle: '',
      document: null
    }
  })

  const loadData = () => {
    Object.keys(storeItemDriver).forEach(key => {
      setValue(key, storeItemDriver[key] ?? '', { shouldValidate: false });
    });
  }

  useEffect(() => {
    if (Object.keys(storeItemDriver)?.length > 0) {
      loadData()
    }
  }, [])

  return(
    <Stack
      component={'form'}
      height={'100%'}
      paddingRight={1}
      marginBottom={3}
      marginRight={-1}
      onSubmit={handleSubmit(() => handleSaveDriver({...control._formValues}))}
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
        validate={validateDocument}
        mask={cpfMask}
        required
      />
      <InputSelectController
        nameField={'bound'}
        control={control}
        label="Vinculado"
        disabled={storeItemVehicle?.state?.vehiclesList === 0}
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
            {key: 'ABC1234', label: 'ABC1234', value: 'ABC1234'},
            {key: 'DEF5678', label: 'DEF5678', value: 'DEF5678'},
            {key: 'GHI9012', label: 'GHI9012', value: 'GHI9012'},
            {key: 'JKL3456', label: 'JKL3456', value: 'JKL3456'},
            {key: 'MNO7890', label: 'MNO7890', value: 'MNO7890'},
          ]}
        />
      }
    </Stack>
  )
}

export default FormDataDrivers