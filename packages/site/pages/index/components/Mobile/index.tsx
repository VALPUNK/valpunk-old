import * as React from "react"
import Grid from "@material-ui/core/Grid"
import InstructionStep, { InstructionStepProps } from "./InstructionStep"
import Typography from "@material-ui/core/Typography"
import { cdn } from "~/constants/constants"

interface Props {
  test?: string
}

interface State {
  test?: string
}

const size = 100
const Draw = require("./lottie/draw.json")
const Code = require("./lottie/code.json")
const Design = require("./lottie/design.json")
const Rocket = require("./lottie/rocket.json")

const instructions: InstructionStepProps[] = [
  {
    id: 0,
    img: cdn + "/img/Step1_draw.png",
    backgroundImage:
      "https://images.unsplash.com/photo-1519895173443-d259e1fc4962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2022&q=80",
    title: { text: "We Brainstorm", color: "white" },
    overlayColor: "rgba(0,0,0,0.3)",
    body: {
      text:
        "It's important to know all the steps for your MVP (Minimum Vialbe Product)",
      color: "white"
    },
    lottie: Draw,
    separatorStyle: {
      height: size,
      backgroundColor: "#EEEEEE",
      width: "100%",
      boxShadow: "0px 5px 4px rgba(0,0,0,.6)",
      zIndex: 100
      // position: "sticky",
      // top: 0
    }
  },
  {
    id: 1,
    img: "https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/no_phone.png",
    backgroundImage:
      "https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/parralax_big_background.png",
    overlayColor: "rgba(0,0,0,0.3)",
    title: { text: "We Design", color: "white" },
    body: {
      text:
        "Before we touch code we like to design the app or site in Adobe XD or Photoshop",
      color: "white"
    },
    lottie: Design,
    separatorStyle: {
      height: size,
      backgroundColor: "white",
      width: "100%",
      boxShadow: "0px 0px 5px black",
      zIndex: 100
      // position: "sticky",
      // top: 0
    }
  },
  {
    id: 2,
    img: cdn + "/img/Step1.png",
    backgroundImage:
      "https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/we_code.png",
    overlayColor: "rgba(0,0,0,0.6)",
    title: { text: "We Code", color: "white" },
    body: {
      text:
        "With a good gameplan and a solid idea of what you want, we can begin coding. You're input will be welcome in refinining the product.",
      color: "white"
    },
    lottie: Code,
    separatorStyle: {
      height: size,
      backgroundColor: "white",
      width: "100%",
      boxShadow: "0px 0px 5px black",
      zIndex: 100
      // position: "sticky",
      // top: 0
    }
  },
  {
    id: 3,
    img: cdn + "/img/Step4.png",
    backgroundImage:
      "https://image.shutterstock.com/z/stock-vector-rocket-launch-cartoon-space-illustration-485675737.jpg",

    overlayColor: "rgba(0,0,0,0.4)",
    title: { text: "We Launch!!!", color: "white" },
    body: {
      text:
        " Now we can get the app into the hands of your friends, family, and customers! Though this is often a milestone to rest our hats on, this is the first step of many to making the perfect app for your audience.",
      color: "white"
    },
    lottie: Rocket,
    separatorStyle: {
      height: size,
      backgroundColor: "white",
      width: "100%",
      boxShadow: "0px 0px 5px black",
      zIndex: 100
      // position: "sticky",
      // top: 0
    }
  }
]

export default class Mobile extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <Grid container>
        {instructions.map(item => (
          <InstructionStep key={item.id} {...item} />
        ))}
      </Grid>
    )
  }
}
