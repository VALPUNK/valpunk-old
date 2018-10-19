import * as React from "react"
import styled from "styled-components"


export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLElement> {}

export default class ButtonBase extends React.PureComponent<ButtonBaseProps> {
  public render() {
    return (
      <StyledButtonBase className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
        {this.props.children}
      </StyledButtonBase>
    )
  }
}

const StyledButtonBase = styled.button`
  border: inherit;
  cursor: pointer;
  outline: inherit;
`
