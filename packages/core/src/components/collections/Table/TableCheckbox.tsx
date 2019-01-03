import Checkbox from "@material-ui/core/Checkbox"
import Modal from "@material-ui/core/Modal"
import Paper from "@material-ui/core/Paper"
import { createStyles, Theme } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import * as React from "react"
import ReactTable, { Column, RowInfo, TableProps } from "react-table"
import checkboxHOC, {
  SelectAllInputComponentProps,
  SelectInputComponentProps,
  SelectTableAdditionalProps
} from "react-table/lib/hoc/selectTable"
// import "react-table/react-table.css"
import TableCell from "./components/TableCell"
import TablePagination from "./components/TablePagination"
import TableToolbar from "./components/TableToolbar"
import { makeColumns } from "./utils"

export const CheckBox = (props: SelectInputComponentProps) => {
  const onClick = (_event: React.MouseEvent<HTMLElement>) => {
    props.onClick(props.id, false, {})
  }

  return (
    <Checkbox
      onClick={onClick}
      checked={props.checked}
      style={{ color: props.checked ? "white" : "black" }}
    />
  )
}

export const AllCheckBox = (props: SelectAllInputComponentProps) => {
  const onClick = (_event: React.MouseEvent<HTMLElement>) => {
    props.onClick()
  }

  return <Checkbox onClick={onClick} checked={props.checked} />
}

const CheckboxTable = checkboxHOC(ReactTable)

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

export interface TableCheckboxModalProps {
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
  onUpdatedList?: (selection: any[]) => void
}

interface State {
  open: boolean
  modalInfo?: { data?: any }
  selection?: any[]
  selectAll?: boolean
}

export default class TableCheckbox extends React.Component<
  TableCheckboxModalProps,
  State
> {
  // const [open, setOpen] = React.useState(false);
  // const [modalInfo, setModalinfo] = React.useState<{ data?: any }>({});

  public checkboxRef: any = React.createRef<
    React.ComponentClass<
      Partial<TableProps<{}, {}>> & SelectTableAdditionalProps,
      any
    >
  >()

  constructor(props: any) {
    super(props)
    this.state = {
      open: false,
      modalInfo: { data: "" },
      selection: []
    }
    this.toggleSelection.bind(this)
    this.isSelected.bind(this)
  }

  public componentDidUpdate(_prevProps: any, prevState: State) {
    if (prevState !== this.state) {
      this.props.onUpdatedList(this.state.selection)
    }
  }

  public toggleSelection = (
    key: string,
    _shiftKeyPressed?: boolean,
    _row?: any
  ) => {
    // console.log("toggle selection")
    let selection = [...this.state.selection]
    const keyIndex = selection.indexOf(key)
    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ]
    } else {
      selection.push(key)
    }
    this.setState({ selection })
  }

  public toggleAll = () => {
    const selectAll = this.state.selectAll ? false : true
    const selection: any[] = []
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxRef
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData
      // we just push all the IDs onto the selection array
      currentRecords.forEach((item: any) => {
        selection.push(item._original._id)
      })
    }
    this.setState({ selectAll, selection })
  }

  public isSelected = (key: string) => {
    return this.state.selection.includes(key)
  }

  public logSelection = () => {
    console.log("selection:", this.state.selection)
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
    const { selectAll } = this.state

    const checkboxProps: SelectTableAdditionalProps = {
      keyField: "id",
      selectAll,
      isSelected: this.isSelected,
      toggleSelection: this.toggleSelection,
      toggleAll: this.toggleAll,
      selectType: "checkbox",
      SelectInputComponent: CheckBox,
      SelectAllInputComponent: AllCheckBox,
      // @ts-ignore
      selectWidth: 60
    }

    return (
      <Paper
      // className={this.props.classes.root}
      >
        <Table
        // className={this.props.classes.table}
        >
          <CheckboxTable
            ref={ref => (this.checkboxRef = ref)}
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
            // className="-striped -highlight"
            getTdProps={(
              _state: any,
              _rowInfo: RowInfo,
              _column: any,
              _instance: any
            ) => {
              // console.log(_rowInfo)
              return {
                onClick: () => {
                  this.toggleSelection(_rowInfo.original.id, false, {})
                }
              }
              // return {
              //   onClick: (_e: any, _handleOriginal: any) => {
              //     this.setState({ modalInfo: { data: _rowInfo.original } })
              //     // setModalinfo({ data: _rowInfo.original });
              //     this.handleOpen()
              //     if (_handleOriginal) {
              //       _handleOriginal()
              //     }
              //   }
              // }
            }}
            getTrProps={(_finalState: any, row: any) => {
              // someone asked for an example of a background color change
              // here it is...
              const selected = this.isSelected(row.original.id)
              return {
                style: {
                  backgroundColor: selected ? "#00C853" : "inherit",

                  color: selected ? "white" : "inherit",
                  fontWeight: selected ? "bold" : "inherit"
                }
              }
            }}
            {...checkboxProps}
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

interface CheckboxProps {}
