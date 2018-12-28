import Paper from "@material-ui/core/Paper"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import * as React from "react"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "95%",
      marginTop: theme.spacing.unit * 3
    }
  })

export interface CardContainerProps {
  children?: any
  classes?: {
    root: string
  }
  width?: number | string
  noPadding?: boolean
  style?: React.CSSProperties
}

class CardContainer extends React.PureComponent<CardContainerProps> {
  public render() {
    const { children, classes, width, noPadding, style } = this.props
    return (
      <Paper
        className={classes.root}
        style={{ width: width || null, ...style }}
      >
        <div style={{ padding: noPadding ? 0 : 20 }}>{children}</div>
      </Paper>
    )
  }
}

export default withStyles(styles)(CardContainer)
