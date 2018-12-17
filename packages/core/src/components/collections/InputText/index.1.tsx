import { createStyles, Theme, withStyles } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import FormControl from "@material-ui/core/FormControl";
import Input, { InputProps } from "@material-ui/core/Input";
import * as React from "react";
import InputLabel from "../InputLabel/index";
import { TextFieldProps } from "@material-ui/core/TextField";
import { FormLabelProps } from "@material-ui/core/FormLabel";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import FormHelperText, {
  FormHelperTextProps
} from "@material-ui/core/FormHelperText";
import { SelectProps } from "@material-ui/core/Select";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing.unit
    },
    cssLabel: {
      "&$cssFocused": {
        color: blue[500]
      }
    },
    cssFocused: {},
    cssUnderline: {
      "&:after": {
        borderBottomColor: blue[500]
      }
    }
  });

export interface TextInputProps {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  InputLabelProps?: Partial<InputLabelProps>;
  inputRef?: React.Ref<any> | React.RefObject<any>;
  label?: React.ReactNode;
  margin?: "none" | "dense";
  multiline?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  select?: boolean;
  SelectProps?: Partial<SelectProps>;
  type?: string;
  value?: Array<string | number | boolean> | string | number | boolean;
  classes?: {
    margin: string;
    cssUnderline: string;
  };
  className?: string;
}

const InputText = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  classes,
  ...props
}: TextInputProps) => {
  return (
    <FormControl className={classes.margin + classes}>
      <InputLabel>Testman</InputLabel>
      <Input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        classes={{
          underline: classes.cssUnderline
        }}
        {...props}
      />
      <FormHelperText>123</FormHelperText>
    </FormControl>
  );
};

export default withStyles(styles)(InputText);
