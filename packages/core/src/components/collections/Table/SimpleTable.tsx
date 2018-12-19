import Paper from "@material-ui/core/Paper";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import * as React from "react";
import ReactTable, { Column } from "react-table";
import "react-table/react-table.css";
import TableCell from "./components/TableCell";
import TablePagination from "./components/TablePagination";
import TableToolbar from "./components/TableToolbar";
import { makeColumns } from "./utils";

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

  export interface ColumnDataProps {
    name: string;
    key: string;
    options?: Column;
  }

export interface SimpleTableProps {
  classes?: {
    root?: string;
    table?: string;
  };
  tableTitle: string;
  data: any[];
  columnData: ColumnDataProps[];
}



const SimpleTable = ({
  classes,
  tableTitle,
  data,
  columnData
}: SimpleTableProps) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <ReactTable
          data={data}
          PadRowComponent={() => <TableCell />}
          columns={[
            {
              Header: <TableToolbar tableName={tableTitle} />,
              columns: makeColumns(columnData)
            }
          ]}
          filterable={
            columnData.some(prop => (prop.options ? true : false))
              ? true
              : false
          }
          PaginationComponent={TablePagination}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(SimpleTable);
