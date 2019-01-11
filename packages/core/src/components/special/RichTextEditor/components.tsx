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
      : "#ccc"};
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
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
`
