// Wrapper around the actual Stripe <*Element>, so that it can be used as `inputComponent`
// for Material UI's <Input>. Also adds some styling.

import { createStyles, withStyles } from "@material-ui/core/styles";
import * as React from "react";

const styles = () =>
  createStyles({
    root: {
      width: "100%",
      padding: "6px 0 7px",
      cursor: "text"
    }
  });

export interface StripeInputProps {
  classes?: any;
  component?: any;
  inputStyle?: React.CSSProperties;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: any) => void;
  stripeStyle?: { base: stripe.elements.Style };
  style?: React.CSSProperties;
}

const StripeInput = ({
  classes: c,
  component: Component,
  onFocus,
  onBlur,
  onChange,
  stripeStyle,
  style
}: StripeInputProps) => {
  return (
    <Component
      className={c.root}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      placeholder=""
      style={{
        ...stripeStyle,
        ...style
      }}
    />
  );
};

export default withStyles(styles, { withTheme: true })(StripeInput);
