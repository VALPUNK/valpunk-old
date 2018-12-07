import { IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import FilterListIcon from "@material-ui/icons/FilterList";

import * as React from "react";

const toolbarStyles = (theme: Theme) =>
  createStyles({
    root: {
      paddingRight: theme.spacing.unit
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    spacer: {
      flex: "1 1 100%"
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: "0 0 auto"
    }
  });

interface TableToolbarProps {
  classes?: {
    root: string;
    highlight: string;
    spacer: string;
    actions: string;
    title: string;
  };
  tableName?: string;
}

const TableToolbar = ({ classes, tableName }: TableToolbarProps) => {
  return (
    <Toolbar className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          {tableName}
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <Tooltip title="Filter list">
          <IconButton aria-label="Filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

export default withStyles(toolbarStyles)(TableToolbar);
