import Grid from "@material-ui/core/Grid";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { data } from "../mock";
import SimpleTable from "../SimpleTable";

const columnData = [
  {
    name: "First Name",
    key: "firstName"
  },
  {
    name: "Last Name",
    key: "firstName"
  },
  {
    name: "Profile Progress",
    key: "progress"
  },
  {
    name: "Status",
    key: "status"
  }
];

const Example = () => (
  <Grid container={true} justify="center" style={{ padding: 50 }}>
    <Grid item={true} xs={10} style={{ padding: 20 }}>
      <SimpleTable
        tableTitle={"Table Title"}
        data={data}
        columnData={columnData}
      />
    </Grid>
  </Grid>
);
(storiesOf("Table", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Simple Table", () => <Example />);
