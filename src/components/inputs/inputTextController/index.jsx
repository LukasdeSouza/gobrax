import { FormControl, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";


const InputTextController = ({
  label = "",
  required = '' | false,
  validate = null,
  nameField,
  control,
  mask,
  placeholder,
  type = 'text',
  endAdornment,
  ...props
}) => {
  return (
    <Controller
      name={nameField}
      control={control}
      rules={{
        required: required,
        validate: validate,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const fieldError = error !== undefined
        return (
          <FormControl fullWidth key={`text-field-${nameField}`}>
            <TextField
              size="small"
              label={label}
              type={type}
              htmlFor={`component-outlined-${nameField}`}
              placeholder={placeholder}
              value={mask ? mask(value) : value}
              onChange={onChange}
              focused
              error={fieldError}
              InputProps={{
                endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
              }}
            />

          </FormControl>
        );
      }}
    />
  );
};


export default InputTextController;
