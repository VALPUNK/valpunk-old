import Grid from "@material-ui/core/Grid"
import * as React from "react"
import SwipeableViews from "react-swipeable-views"
import NavigationArrows from "./components/NavigationArrows"
import { Hidden } from "@material-ui/core"

interface Props {
  images: string[]
}

interface State {
  imageSelector: number
}

export default class ProductPreview extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      imageSelector: 0
    }
  }

  public ImageSwipeHandler = (index: number) => {
    this.setState({
      imageSelector: index
    })
  }

  public ImageSelectorHandler = (index: number) => (
    _event: React.MouseEvent<{}>
  ) => {
    let newIndex = index
    newIndex = newIndex < 0 ? this.props.images.length - 1 : newIndex
    newIndex = newIndex > this.props.images.length - 1 ? 0 : newIndex
    this.setState({
      imageSelector: newIndex
    })
  }

  public render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <div
              style={
                {
                  // position: "relative",
                  // zIndex: 0,
                  // marginTop: "-50%",
                  // marginBottom: "50%"
                }
              }
            >
              <SwipeableViews
                index={this.state.imageSelector}
                onChangeIndex={this.ImageSwipeHandler}
              >
                {this.props.images.map(image => (
                  <div
                    key={image}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundImage: `url(${image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundColor: "transparent",
                      width: "100%",
                      paddingTop: "75%"
                    }}
                  />
                  //   <img src={image} style={{ width: "100%", height: "100%" }} />
                  // </div>
                ))}
              </SwipeableViews>
            </div>

            <Hidden xsDown={true}>
              <NavigationArrows
                onClick={this.ImageSelectorHandler}
                index={this.state.imageSelector}
              />
            </Hidden>
          </Grid>
          <Grid
            container
            style={{ justifyContent: "center", padding: "8px" }}
            spacing={8}
          >
            <Grid item xs={2}>

            </Grid>
            {this.props.images.map(thumbnail => (
              <Grid item key={thumbnail} xs={2}>
                <div
                  style={{
                    border:
                      this.props.images.indexOf(thumbnail) ===
                      this.state.imageSelector
                        ? "1px solid red"
                        : "1px solid #ccc",
                    cursor: "pointer",
                    backgroundColor: "black",
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    paddingTop: "75%"
                  }}
                  onClick={this.ImageSelectorHandler(
                    this.props.images.indexOf(thumbnail)
                  )}
                />
              </Grid>
            ))}
            <Grid item xs={2}>

            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
