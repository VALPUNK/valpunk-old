import Modal from "@material-ui/core/Modal"
import Paper from "@material-ui/core/Paper"
import { createStyles, Theme } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import * as React from "react"
import ReactTable, { Column, RowInfo } from "react-table"
import "react-table/react-table.css"
import TableCell from "./components/TableCell"
import TablePagination from "./components/TablePagination"
import TableToolbar from "./components/TableToolbar"
import { makeColumns } from "./utils"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    },
    paper: {
      position: "absolute",
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    }
  })

export interface ColumnDataProps {
  name: string
  key: string
  options?: Column
}

export interface TableWithModalProps {
  classes?: {
    root?: string
    table?: string
    paper?: string
  }
  columnData: ColumnDataProps[]
  tableTitle: string
  data: any[]
  children?: (
    props: {
      clickedData: { data?: any }
      handleOpen: () => void
      handleClose: () => void
      modalStyle: React.CSSProperties
    }
  ) => React.ReactNode
}

interface State {
  open: boolean
  modalInfo?: { data?: any }
}

export default class TableWithModal extends React.Component<
  TableWithModalProps,
  State
> {
  // const [open, setOpen] = React.useState(false);
  // const [modalInfo, setModalinfo] = React.useState<{ data?: any }>({});

  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      modalInfo: { data: "" }
    }
  }

  public handleOpen = () => {
    this.setState({
      open: true
    })
    // setOpen(true);
  }

  public handleClose = () => {
    this.setState({
      open: false
    })
    // setOpen(false);
  }

  public render() {
    return (
      <Paper
      // className={this.props.classes.root}
      >
        <Table
        // className={this.props.classes.table}
        >
          <ReactTable
            data={this.props.data}
            PadRowComponent={() => <TableCell />}
            columns={[
              {
                Header: <TableToolbar tableName={this.props.tableTitle} />,
                columns: makeColumns(this.props.columnData)
              }
            ]}
            filterable={
              this.props.columnData.some(prop => (prop.options ? true : false))
                ? true
                : false
            }
            PaginationComponent={TablePagination}
            defaultPageSize={10}
            className="-striped -highlight"
            getTdProps={(_state: any, _rowInfo: RowInfo) => {
              return {
                onClick: (_e: any, _handleOriginal: any) => {
                  this.setState({ modalInfo: { data: _rowInfo.original } })
                  // setModalinfo({ data: _rowInfo.original });
                  this.handleOpen()
                  if (_handleOriginal) {
                    _handleOriginal()
                  }
                }
              }
            }}
          />
        </Table>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          {this.props.children({
            clickedData: this.state.modalInfo,
            handleOpen: this.handleOpen,
            handleClose: this.handleClose,
            modalStyle: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%)`,
              maxWidth: "80%",
              padding: 16,
              wordWrap: "normal"
            }
          })}
        </Modal>
      </Paper>
    )
  }
}

// export default withStyles(styles)(TableWithModal);
