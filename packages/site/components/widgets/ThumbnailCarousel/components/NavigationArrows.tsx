import BackArrowIcon from "@material-ui/icons/NavigateBefore"
import ForwardArrowIcon from "@material-ui/icons/NavigateNext"
import * as React from "react"

interface Props {
  onClick?: (index: number) => (_event: React.MouseEvent<{}>) => void
  index: number
}

export default class NavigationArrows extends React.Component<Props> {
  public render() {
    return (
      <div
        style={{
          position: "relative",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "-10%",
          zIndex: 1
        }}
      >
        <div
        onClick={this.props.onClick(this.props.index - 1)}
          style={{
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
            // boxShadow: "50px 0 50px 50px rgba(0, 0, 0, 0.5)"
          }}
        >
          <BackArrowIcon

            style={{
              fontSize: 50,
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          />
        </div>
        <div
        onClick={this.props.onClick(this.props.index + 1)}
          style={{
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
            // boxShadow: "-50px 0 50px 50px rgba(0, 0, 0, 0.5)"
          }}
        >
          <ForwardArrowIcon

            style={{
              fontSize: 50,
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          />
        </div>
      </div>
    )
  }
}
