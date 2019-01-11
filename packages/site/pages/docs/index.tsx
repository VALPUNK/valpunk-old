import { List, ListItem } from "@material-ui/core";
import * as React from "react";
import { Layout, Meta } from "~/components/universal";
import SideMenu from "~/components/universal/SideMenu";
import Documentation from "./Documentation/Documentation";
import { mockData } from "./mock"

const listItems = (
  <List>
    <ListItem button={true}>Introduction</ListItem>
    <ListItem button={true}>API</ListItem>
    <ListItem button={true}>FAQs</ListItem>
    <ListItem button={true}>Frequently Encountered Problems</ListItem>
  </List>
)
export default class Docs extends React.Component {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          <SideMenu listItems={listItems}>
            <Documentation data={mockData} />
          </SideMenu>
        </Layout>
      </div>
    )
  }
}
