import * as React from "react";
import { RowRenderProps } from "react-table";
import "react-table/react-table.css";
import TableCell from "./components/TableCell";
import TableHeaderCell from "./components/TableHeaderCell";

export const makeColumns = (columnData: any[]) => {
  console.log(columnData);
  let columns: any[] = [];
  columnData.forEach(data => {
    columns.push({
      Header: <TableHeaderCell>{data.name}</TableHeaderCell>,
      accessor: data.key,
      Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>
    });
  });
  return columns;
};
