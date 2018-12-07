import MuiTablePagination from "@material-ui/core/TablePagination"
import * as React from "react"
import { PageSizeChangeFunction } from "react-table"

export interface TablePaginationProps {
  pages?: number
  page?: number
  pageSize?: number
  PageButtonComponent?: React.ComponentType
  onPageChange?: (page: number) => {}
  previousText?: string
  nextText?: string
  onPageSizeChange?: PageSizeChangeFunction
  pageSizeOptions?: number[]
  data?: any[]
}

export default class TablePagination extends React.Component<
  TablePaginationProps
> {
  constructor(props: any) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.changeRowsPerPageHandler = this.changeRowsPerPageHandler.bind(this)
  }

  public componentDidUpdate() {
    console.log("pagination props", this.props)
  }

  public changePage(_event: React.MouseEvent<HTMLButtonElement>, page: number) {
    console.log(this.props)
    this.props.onPageChange(page)
  }

  public changeRowsPerPageHandler(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    console.log(this.props)
    this.props.onPageSizeChange(Number(event.target.value), this.props.page)
  }

  public render() {
    return (
      <MuiTablePagination
        rowsPerPageOptions={this.props.pageSizeOptions}
        // component="div"
        count={this.props.data.length}
        rowsPerPage={this.props.pageSize}
        page={this.props.page}
        backIconButtonProps={{
          "aria-label": "Previous Page",
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page",
        }}
        onChangePage={this.changePage}
        onChangeRowsPerPage={this.changeRowsPerPageHandler}
      />
    )
  }
}
