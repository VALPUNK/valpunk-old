import * as React from "react"
import { Grid } from "@material-ui/core"
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

// linear-gradient(rgba(185, 79, 7, 0.5), rgba(0, 0, 0, 0), rgba(8, 48, 70, 0.5)),

// linear-gradient(rgba(8, 48, 70, 0.5), rgba(185, 79, 7, 0.5), rgba(185, 79, 7, 0.5), rgba(8, 48, 70, 0.5)),
// linear-gradient(rgba(185, 79, 7, 0.5), rgba(8, 48, 70, 0.5), rgba(8, 48, 70, 0.5), rgba(185, 79, 7, 0.5)),


const darkBlue = "#224070"
const lightBlue = "#285091"

export default class ChangeLogItem extends React.Component<Props> {
  public render() {
    return (
      <div
        style={{
          padding: "25px",
          backgroundColor: this.props.ltr ? lightBlue : darkBlue,
          // backgroundImage:
          //   this.props.ltr
          //     ? `url(https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80)`
          //     : " url(https://images.unsplash.com/photo-1492232093388-4d9d123d362d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{ fontSize: "2.25em", color: "white" }}>
                  {this.props.data.title}
                </div>
                <div style={{ fontSize: "1.25em", fontWeight: 100, color: "white" }}>
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
