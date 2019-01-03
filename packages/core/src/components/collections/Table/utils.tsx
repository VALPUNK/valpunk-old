import * as React from "react"
import { CellInfo } from "react-table"
import "react-table/react-table.css"
import TableCell from "./components/TableCell"
import TableHeaderCell from "./components/TableHeaderCell"
import { ColumnDataProps } from "./TableWithModal"

export const makeColumns = (columnData: ColumnDataProps[]) => {
  // console.log(columnData);
  const columns: any[] = []
  columnData.forEach(data => {
    columns.push({
      Header: <TableHeaderCell>{data.name}</TableHeaderCell>,
      accessor: data.key,
      Cell: (cell: CellInfo) => {
        return (
          <TableCell style={{ ...cell.styles }} {...cell}>
            {cell.value}
          </TableCell>
        )
      },
      ...data.options
    })
  })

  // columns.push({
  //   id: "checkbox",
  //   accessor: "",
  //   Cell: () => {
  //     return <div>123</div>
  //   },
  //   Header: () => {
  //     return <div> Select All</div>
  //   },
  //   sortable: false,
  //   width: 45
  // })

  return columns
}
