import * as React from "react";

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBase = (props: ButtonBaseProps) => {
  return <button {...props}>{props.children}</button>;
};

export default ButtonBase;
