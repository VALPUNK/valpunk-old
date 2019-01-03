import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import matchSorter from "match-sorter"
import * as React from "react"
import { data } from "../mock"
import TableCheckbox from "../TableCheckbox"

const onUpdateList = (d: any[]) => {
  console.log("updated with", d)
}

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
]
;(storiesOf("Table", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Table With Checkbox and Modal", () => (
    <Grid container={true} justify="center" style={{ padding: 50 }}>
      <Grid item={true} xs={10} style={{ padding: 20 }}>
        <TableCheckbox
          columnData={columnData}
          tableTitle={"Table with Modal"}
          data={data}
          onUpdatedList={onUpdateList}
        >
          {({ clickedData, modalStyle }) => {
            if (!clickedData.data) {
              return <div>Loading...</div>
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
            )
          }}
        </TableCheckbox>
      </Grid>
    </Grid>
  ))
