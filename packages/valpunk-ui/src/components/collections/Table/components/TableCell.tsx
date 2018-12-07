import MuiTableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import * as React from "react"

interface TableCellProps {
  children?: React.ReactNode
}
const TableCell = ({ children }: TableCellProps) => {
  return (
    <TableRow>
      <MuiTableCell style={{ borderBottomWidth: 0 }}>{children}</MuiTableCell>
    </TableRow>
  )
}
export default TableCell
