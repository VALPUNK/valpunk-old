import * as React from "react"
import { Grid } from "@material-ui/core"
import { Carousel } from "@valpunk/core"
import ThumbnailCarousel from "~/components/widgets/ThumbnailCarousel"

interface Props {
  data: ChangeLogItemProps
  ltr: boolean
}

interface ChangeLogItemProps {
  title: string
  description: string
  images: string[]
}

const salmonColor = "#ff4347"
const greenColor = "#59d4c6"

const darkBlue = "#224070"
const lightBlue = "#285091"

export default class ChangeLogItem extends React.Component<Props> {
  public render() {
    return (
      <div
        style={{
          padding: "25px",
          backgroundColor: this.props.ltr ? lightBlue : darkBlue,
          // boxShadow: "0 5px 10px 0 black"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "1200px" }}>
            <Grid
              container
              alignItems="center"
              direction={this.props.ltr ? "row" : "row-reverse"}
              spacing={24}
            >
              <Grid item xs={12} sm={6}>
                <ThumbnailCarousel images={this.props.data.images} />
                {/* <Carousel
              pages={this.props.data.images.length}
              interval={5000}
              springConfig={{
                duration: "1s",
                easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
                delay: "0s"
              }}
            >
              {this.props.data.images.map(image => (
                <div
                  key={image}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "none",
                    paddingTop: "100%"
                  }}
                />
              ))}
            </Carousel> */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{ fontSize: "2em", color: "white" }}>
                  {this.props.data.title}
                </div>
                <div style={{ fontSize: "0.9em", color: "white" }}>
                  {this.props.data.description}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}
