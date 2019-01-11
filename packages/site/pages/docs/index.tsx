import { List, ListItem } from "@material-ui/core";
import * as React from "react";
import { Layout, Meta } from "~/components/universal";
import SideMenu from "~/components/universal/SideMenu";
import Documentation from "./Documentation/Documentation";

const listItems = (
  <List>
    <ListItem button={true}>Introduction</ListItem>
    <ListItem button={true}>First Thing</ListItem>
    <ListItem button={true}>Here is another Thing</ListItem>
    <ListItem button={true}>Frequently Encountered Problems</ListItem>
    <ListItem button={true}>Conclusion</ListItem>
  </List>
)
export default class Docs extends React.Component {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          <SideMenu listItems={listItems}>
            <Documentation />
          </SideMenu>
        </Layout>
      </div>
    )
  }
}
