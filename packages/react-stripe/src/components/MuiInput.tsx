// A Wrapper for the <FormControl>, <InputLabel>, <Error> and the Stripe <*Element>.
// Similar to Material UI's <TextField>. Handles focused, empty and error state
// to correctly show the floating label and error messages etc.

import { TextField } from "@material-ui/core";
import { TextFieldProps } from "material-ui";
import * as React from "react";
import StripeInput from "./StripeInput";
import StripeInputWrapper from "./StripeInputWrapper";

export interface MuiInputProps extends TextFieldProps {
  component: any;
  label: string;
  stripeStyle?: { base: stripe.elements.Style };
}

const MuiInput = ({ component, stripeStyle, ...rest }: MuiInputProps) => {
  return (
    <StripeInputWrapper>
      {({ focused, empty, error, ...func }) => (
        <TextField
          InputLabelProps={{
            focused,
            shrink: focused || !empty,
            error: !!error
          }}
          {...rest}
          {...func}
          InputProps={{
            inputComponent: StripeInput
          }}
          inputProps={{
            component,
            stripeStyle
          }}
          helperText={error ? error.message : " "}
          FormHelperTextProps={{ error: error ? true : false }}
        />
      )}
    </StripeInputWrapper>
  );
};

export default MuiInput;
