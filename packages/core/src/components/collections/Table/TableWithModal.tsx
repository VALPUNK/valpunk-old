import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import * as React from "react";
import ReactTable, { RowInfo } from "react-table";
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
    },
    paper: {
      position: "absolute",
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    }
  });

export interface TableWithModalProps {
  classes?: {
    root?: string;
    table?: string;
    paper?: string;
  };
  columnData: Array<{ name: string; key: string }>;
  tableTitle: string;
  data: any[];
  children?: (
    props: {
      clickedData: { data?: any };
      handleOpen: () => void;
      handleClose: () => void;
      modalStyle: React.CSSProperties;
    }
  ) => React.ReactNode;
}

const TableWithModal = ({
  classes,
  columnData,
  tableTitle,
  data,
  children
}: TableWithModalProps) => {
  const [open, setOpen] = React.useState(false);
  const [modalInfo, setModalinfo] = React.useState<{ data?: any }>({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          PaginationComponent={TablePagination}
          defaultPageSize={10}
          className="-striped -highlight"
          getTdProps={(_state: any, _rowInfo: RowInfo) => {
            return {
              onClick: (_e: any, _handleOriginal: any) => {
                setModalinfo({ data: _rowInfo.original });
                handleOpen();
                if (_handleOriginal) {
                  _handleOriginal();
                }
              }
            };
          }}
        />
      </Table>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        {children({
          clickedData: modalInfo,
          handleOpen,
          handleClose,
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
  );
};

export default withStyles(styles)(TableWithModal);
