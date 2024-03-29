import MuiTableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import * as React from "react"

interface TableCellProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}
const TableCell = ({ children, style }: TableCellProps) => {
  return (
    <TableRow>
      <MuiTableCell style={{ borderBottomWidth: 0, ...style }}>
        {children}
      </MuiTableCell>
    </TableRow>
  )
}
export default TableCell
