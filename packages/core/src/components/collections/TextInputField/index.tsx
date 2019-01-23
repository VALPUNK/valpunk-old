import * as React from "react";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps
} from "@material-ui/core/TextField";
import { FieldProps, getIn } from "formik";
// import { Omit } from './types';

export interface TextInputFieldProps
  extends FieldProps,
    Omit<
      MuiTextFieldProps,
      "error" | "name" | "onChange" | "value" | "variant"
    > {}

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: TextInputFieldProps): MuiTextFieldProps => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled
  };
};

const TextInputField: React.ComponentType<TextInputFieldProps> = (
  props: TextInputFieldProps
) => (
  <MuiTextField
    {...fieldToTextField(props)}
    style={{ width: "100%" }}
    margin="normal"
  />
);

export default TextInputField;

TextInputField.displayName = "FormikMaterialUITextField";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;