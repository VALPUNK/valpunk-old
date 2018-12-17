import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React from "react";
import { Field } from "react-final-form";

interface InputTextProps {
  input?: TextFieldProps;
  meta?: {
    touched?: boolean;
    error?: string;
  };
}

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}: InputTextProps) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput.inputProps}
    onChange={onChange}
    value={value}
  />
);
