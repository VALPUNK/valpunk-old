import { createStyles, Theme, withStyles } from "@material-ui/core";
import MuiInputLabel from "@material-ui/core/InputLabel";
import * as React from "react";

const styles = (_theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    }
    // cssLabel: {
    //   "&$cssFocused": {
    //     color: theme.
    //   }
    // },
    // cssFocused: {},
    // cssUnderline: {
    //   "&:after": {
    //     borderBottomColor: blue[500]
    //   }
    // }
  });

interface InputLabelProps {
  children?: React.ReactNode;
}

const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return (
    <MuiInputLabel
      htmlFor="custom-css-standard-input"
      className="label"
      {...props}
      // classes={{
      //   root: classes.cssLabel,
      //   focused: classes.cssFocused
      // }}
    >
      {children}
    </MuiInputLabel>
  );
};

export default withStyles(styles)(InputLabel);
