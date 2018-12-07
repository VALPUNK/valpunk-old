import * as React from "react";
import styled, { keyframes } from "styled-components";
import ButtonBase from "../ButtonBase/ButtonBase";

export interface RegularButtonProps extends React.HTMLAttributes<HTMLElement> {}

export default class RegularButton extends React.PureComponent<
  RegularButtonProps
> {
  public render() {
    return (
      <StyledRegularButton {...this.props}>
        {this.props.children}
      </StyledRegularButton>
    );
  }
}

const ripple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`;

const StyledRegularButton = styled(ButtonBase)`
  && {
    color: white;
    background-color: tomato;
    font-size: 1em;
    padding: 10px 40px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }
  &:after {
    border: none;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    border: none;
    content: "";
    animation: ${ripple} 1s ease-out;
  }
`;
