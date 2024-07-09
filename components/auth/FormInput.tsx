'use client';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
interface Props {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
}
const FormInput = ({ name, label, type }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          type={type}
          fullWidth
          variant='outlined'
          error={!!error}
          helperText={error ? error.message : null}
          sx={{}}
          {...field}
        />
      )}
    />
  );
};

export default FormInput;
