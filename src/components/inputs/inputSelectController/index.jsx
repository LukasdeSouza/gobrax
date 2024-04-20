import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";


const InputSelectController = ({
                                 label = "",
                                 required = '' | false,
                                 validate = null,
                                 pattern = {
                                   value: null,
                                   message: '',
                                 },
                                 nameField,
                                 control,
                                 disabled,
                                 onClose,
                                 menuItemList,
                                 ...props
                               }) => {
  return (
    <Controller
      name={nameField}
      control={control}
      rules={{
        required: required,
        validate: validate,
        pattern: pattern
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const fieldError = error !== undefined
        return (
          <FormControl fullWidth key={`text-field-${nameField}`}>
            <InputLabel
              size={'small'}
              htmlFor={`component-select-${nameField}-label`}
              focused
              shrink={true}
            >
              {label}
            </InputLabel>
            {
              value !== undefined &&
              <Select
                labelId={`component-select-${nameField}-label`}
                id={`component-select-${nameField}`}
                label={label}
                variant={'outlined'}
                value={value}
                onChange={onChange}
                onClose={onClose}
                disabled={disabled}
                size={'small'}
                {...props}
                MenuProps={{
                  PaperProps: { sx: { background: '#FFF' } }
                }}
                error={fieldError}
              >
                {
                  menuItemList.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))
                }
              </Select>
            }
          </FormControl>
        );
      }}
    />
  );
};

export default InputSelectController;
