// A Wrapper for the <FormControl>, <InputLabel>, <Error> and the Stripe <*Element>.
// Similar to Material UI's <TextField>. Handles focused, empty and error state
// to correctly show the floating label and error messages etc.

import { TextField } from "@material-ui/core";
import * as React from "react";
import StripeInput from "./StripeInput";
import StripeInputWrapper from "./StripeInputWrapper";
import { TextFieldProps } from "@material-ui/core/TextField";

export interface MuiInputProps {
  component: any;
  label: string;
  stripeStyle?: { base: stripe.elements.Style };
  muiProps?: TextFieldProps;
  style?: React.CSSProperties;
}

const MuiInput = ({
  component,
  stripeStyle,
  muiProps,
  ...rest
}: MuiInputProps) => {
  return (
    <StripeInputWrapper>
      {({ focused, empty, error, ...func }) => (
        <TextField
          InputLabelProps={{
            focused,
            shrink: focused || !empty,
            error: !!error,
            ...muiProps.InputLabelProps
          }}
          {...rest}
          {...func}
          InputProps={{
            inputComponent: StripeInput,
            ...muiProps.InputProps
          }}
          inputProps={{
            component,
            stripeStyle,
            ...muiProps.inputProps
          }}
          helperText={error ? error.message : " "}
          FormHelperTextProps={{ error: error ? true : false }}
        />
      )}
    </StripeInputWrapper>
  );
};

export default MuiInput;
