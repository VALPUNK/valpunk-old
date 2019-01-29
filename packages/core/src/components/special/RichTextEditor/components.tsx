import React from "react"
import styled from "styled-components"
import "./slate.css"

export const Button = styled.span<{ reversed?: boolean; active?: boolean }>`
  cursor: pointer;
  color: ${(props: any) =>
    props.reversed
      ? props.active
        ? "white"
        : "#aaa"
      : props.active
      ? "black"
      : "#999"};
`

export const Icon = styled(
  ({
    className,
    children,
    ...rest
  }: {
    className?: string
    children?: React.ReactNode
  }) => {
    return (
      <span className={`material-icons ${className}`} {...rest}>
        {children}
      </span>
    )
  }
)`
  font-size: 18px;
  vertical-align: text-bottom;
`

export const Menu = styled("div")`
  & > * {
    display: inline-block;
  }
  & > * + * {
    margin-left: 15px;
  }
`

export const Toolbar = styled(Menu)`
  position: relative;
  padding: 20px 15px 15px;
  margin-bottom: -2px;
  border: 2px solid #eee;
`
