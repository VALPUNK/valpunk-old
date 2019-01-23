import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Lottie from "react-lottie"

const Draw = require("./lottie/draw.json")
// import Draw from './lottie/draw.json'

export interface InstructionStepProps {
  id?: number
  img?: string
  backgroundImage?: string
  overlayColor?: string
  title?: {
    text: string
    color: string
  }
  body?: {
    text: string
    color: string
  }
  lottie?: JSON
  separatorStyle?: React.CSSProperties
}

interface State {
  test?: string
}

const size = 80

export default class InstructionStep extends React.PureComponent<
  InstructionStepProps,
  State
> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    const {
      img,
      backgroundImage,
      overlayColor,
      title,
      body,
      lottie,
      separatorStyle
    } = this.props
    return (
      <>
        <Grid
          container
          style={separatorStyle}
          justify="center"
          alignItems="center"
        >
          <Grid container item lg={4} justify="flex-end" alignItems="center">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: lottie
              }}
              width={size}
              height={size}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 1000
          }}
        >
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="row-reverse"
            style={{ width: "100%", backgroundColor: overlayColor }}
          >
            {/* <Grid item lg={4} /> */}
            <Grid item lg={4} style={{ paddingLeft: 24 }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  style={{
                    color: title.color,
                    textShadow: "2px 2px 5px rgba(0,0,0,.8)"
                  }}
                >
                  {title.text}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
                <Typography
                  variant="h6"
                  style={{
                    color: body.color,
                    textShadow: "2px 2px 5px rgba(0,0,0,.8)"
                  }}
                >
                  {body.text}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              lg={4}
              style={{
                backgroundImage: `url(${this.props.img})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "40% 50%",
                verticalAlign: "top",
                padding: "1000px 30px 0px 30px"
                // zIndex: 199
              }}
            />
          </Grid>
          {/* <Grid container direction="row-reverse" style={{ width: "100%" }}>
          <Grid item lg={4}>
            {this.props.children}
          </Grid>
          <Grid item lg={4} />
        </Grid> */}
        </Grid>
      </>
    )
  }
}
