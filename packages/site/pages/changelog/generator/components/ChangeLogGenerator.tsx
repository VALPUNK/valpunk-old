import * as React from "react"
import ChangeLogListGen from "./ChangeLogListGen"
import FeaturedChangesGen from "./FeaturedChangesGen"
import RoadMapListGen from "./RoadMapListGen"
import { FeaturedChange, ChangeListing } from "../../components/ChangeLog";

interface Props {}

interface State {
  featuredChanges?: FeaturedChange[]
  changeLogList?: ChangeListing[]
  roadMapList?: ChangeListing[]
}

export default class ChangeLogGenerator extends React.Component<Props, State> {

  constructor(props: any){
    super(props)
    this.state = {
      featuredChanges: [],
      changeLogList: [],
      roadMapList: []

    }
  }

  public handleAddListing = (listing: string, data: any) => {
    let tempState = this.state[listing]
    console.log(tempState)
    const newLength = tempState.push(data)
    console.log(newLength)
    this.setState({
      [listing]: tempState
    })

    console.log(this.state)
  }

  public render() {
    return (
      <div>
        <div
          style={{ fontSize: "3em", textAlign: "center", padding: "50px 0" }}
        >
          Change Log Generator
        </div>

        <FeaturedChangesGen previewData={this.state.featuredChanges} addListing={this.handleAddListing} />

        <ChangeLogListGen previewData={this.state.changeLogList} addListing={this.handleAddListing} />

        <RoadMapListGen previewData={this.state.roadMapList} addListing={this.handleAddListing} />

      </div>
    )
  }
}
