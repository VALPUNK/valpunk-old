import * as React from "react";
import { RowRenderProps } from "react-table";
import "react-table/react-table.css";
import TableCell from "./components/TableCell";
import TableHeaderCell from "./components/TableHeaderCell";
import { ColumnDataProps } from './TableWithModal';

export const makeColumns = (columnData: ColumnDataProps[]) => {
  console.log(columnData);
  let columns: any[] = [];
  columnData.forEach(data => {
    columns.push({
      Header: <TableHeaderCell>{data.name}</TableHeaderCell>,
      accessor: data.key,
      Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>,
      ...data.options
    });
  });
  return columns;
};
