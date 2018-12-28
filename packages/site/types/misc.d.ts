declare module "react-magnifier"

import "react"
declare module "react" {
  // custom.d.ts
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean
    global?: boolean
  }
}

declare module "react-spring/addons.cjs" {
  import { Ref, PureComponent } from "react"

  interface ParallaxProps {
    pages: number

    config?: SpringConfig | ((key: string) => SpringConfig)

    scrolling?: boolean

    horizontal?: boolean

    ref?: Ref<Parallax>
    style?: React.CSSProperties
    className?: string
  }

  export class Parallax extends PureComponent<ParallaxProps> {
    scrollTo: (offset: number) => void
  }

  interface ParallaxLayerProps {
    factor?: number

    offset?: number

    speed?: number
    style?: React.CSSProperties
    onClick?: () => void
    className?: string
  }

  export class ParallaxLayer extends PureComponent<ParallaxLayerProps> {}
}

declare module "react-jss" {
  import * as React from "react"

  export interface CSSProperties extends React.CSSProperties {
    composes?: string | string[]
  }

  export type StyleSheet<Props = {}> = Record<
    string,
    CSSProperties | ((props: Props) => React.CSSProperties)
  >

  type StyleRules<ClassKey extends string = string, Props = {}> = Record<
    ClassKey,
    CSSProperties | ((props: Props) => React.CSSProperties)
  >

  export type ClassNameMap<ClassKey extends string = string> = Record<
    ClassKey,
    string
  >

  export interface WithStyles<ClassKey extends string = string> {
    classes: ClassNameMap<ClassKey>
  }

  export interface StyledComponentProps<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>
  }

  function injectSheet<ClassKey extends string>(
    style: StyleRules<ClassKey>,
    options?: any
  ): <P>(
    component: React.ComponentType<P & WithStyles<ClassKey>>
  ) => React.ComponentType<P & StyledComponentProps<ClassKey>>

  export default injectSheet

  export const jss: any

  export const JssProvider: any
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#withstate
declare module "recompose/toRenderProps" {
  import { toRenderProps } from "recompose"
  export default toRenderProps
}

declare module "Types" {
  import { StateType } from "typesafe-actions"
  import { exampleInitialState } from "~/lib/reduxStore"
  export type RootState = StateType<typeof exampleInitialState>
}
