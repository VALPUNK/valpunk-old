import Paper from "@material-ui/core/Paper";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import * as React from "react";
import ReactTable, { TableCellRenderer } from "react-table";
import "react-table/react-table.css";
import TableCell from "./components/TableCell";
import TablePagination from "./components/TablePagination";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
  });

export interface SimpleTableProps {
  classes?: {
    root?: string;
    table?: string;
  };
  columns: any[];
  Header: TableCellRenderer;
  data: any[];
}

const SimpleTable = ({ classes, columns, Header, data }: SimpleTableProps) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <ReactTable
          data={data}
          PadRowComponent={() => <TableCell />}
          columns={[
            {
              Header,
              columns
            }
          ]}
          PaginationComponent={TablePagination}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(SimpleTable);
