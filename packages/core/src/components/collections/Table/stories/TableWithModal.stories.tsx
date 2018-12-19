import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TableCellRenderer } from "react-table";
import TableToolbar from "../components/TableToolbar";
import { data } from "../mock";
import TableWithModal from "../TableWithModal";
import matchSorter from "match-sorter"

const columnData = [
  {
    name: "First Name",
    key: "firstName",
    options: {
      filterMethod: (filter: any, rows: any) =>
        matchSorter(rows, filter.value, { keys: ["firstName"] }),
      filterAll: true
    }

  },
  {
    name: "Last Name",
    key: "lastName",
    options: {
      filterable: false
    }
  },
  {
    name: "Profile Progress",
    key: "progress",
    options: {
      filterable: false
    }
  },
  {
    name: "Status",
    key: "status",
    options: {
      filterable: false
    }
  }
];

const Example = () => (
  <Grid container={true} justify="center" style={{ padding: 50 }}>
    <Grid item={true} xs={10} style={{ padding: 20 }}>
      <TableWithModal
        columnData={columnData}
        tableTitle={"Table with Modal"}
        data={data}
      >

        {({ clickedData, modalStyle }) => {
          if (!clickedData.data) {
            return <div>Loading...</div>;
          }
          return (
            <Paper
              style={{
                ...modalStyle,
                backgroundColor: "orange"
              }}
            >
              <Typography variant="h6">Clicked Content</Typography>
              <Typography variant="subtitle1">
                {JSON.stringify(clickedData.data)}
              </Typography>
            </Paper>
          );
        }}
      </TableWithModal>
    </Grid>
  </Grid>
);
(storiesOf("Table", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Table with Modal", () => <Example />);
