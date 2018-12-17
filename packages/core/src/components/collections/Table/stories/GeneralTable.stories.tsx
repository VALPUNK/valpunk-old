// import Grid from "@material-ui/core/Grid";
// import { withInfo } from "@storybook/addon-info";
// import { storiesOf } from "@storybook/react";
// import * as React from "react";
// import SimpleTable from "./GeneralTable";
// import TableHeaderCell from "./components/TableHeaderCell";
// import { RowRenderProps, TableCellRenderer } from "react-table";
// import TableCell from "./components/TableCell";
// import TableToolbar from "./components/TableToolbar";
// import { data } from "./mock";

// const columns = [
//   {
//     Header: <TableHeaderCell>First Name</TableHeaderCell>,
//     accessor: "firstName",
//     Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>
//   },
//   {
//     Header: <TableHeaderCell>Last Name</TableHeaderCell>,
//     accessor: "lastName",
//     Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>
//   },
//   {
//     Header: <TableHeaderCell>Profile Progress</TableHeaderCell>,
//     accessor: "progress",
//     Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>
//   },
//   {
//     Header: <TableHeaderCell>Status</TableHeaderCell>,
//     accessor: "status",
//     Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>
//   }
// ];

// const Header: TableCellRenderer = () => <TableToolbar tableName="The Title" />;

// const Example = () => (
//   <Grid container={true} justify="center" style={{ padding: 50 }}>
//     <Grid item={true} xs={10} style={{ padding: 20 }}>
//       <SimpleTable columns={columns} Header={Header} data={data} />
//     </Grid>
//   </Grid>
// );
// (storiesOf("Table", module) as any)
//   .addDecorator(withInfo({ text: `Description!`, inline: true }))
//   .add("Simple Table", () => <Example />);
