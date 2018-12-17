import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import * as React from "react"

interface HeaderCellProps {
  children: React.ReactNode
}
const TableHeaderCell = ({ children }: HeaderCellProps) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row" style={{ borderBottomWidth: 0 }}>
        {children}
      </TableCell>
    </TableRow>
  )
}

export default TableHeaderCell
