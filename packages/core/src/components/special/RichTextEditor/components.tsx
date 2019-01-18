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
  padding: 1px 15px 15px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
  border-top: 2px solid #eee;
  margin-top: 20px;
  padding-top: 20px;
`
