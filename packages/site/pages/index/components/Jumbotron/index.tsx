// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners

import React from "react"
// @ts-ignore
import { Parallax, ParallaxLayer } from "react-spring/addons.cjs"
import "./styles.css"

const Page = ({
  offset,
  caption,
  first,
  second,
  third,
  gradient,
  onClick,
  height
}: any) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={`image${offset} overlay`} style={{ height }}>
        <div className="slopeBegin" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <div style={{}}>{caption}</div>
        <div className={`stripe ${gradient}`} style={{ margin: "10px 0px" }} />
        <div>{first}</div>
        <div>{second}</div>
        <div>{third}</div>
      </span>
    </ParallaxLayer>
  </>
)

export default class extends React.Component<
  { height?: number },
  { index?: number }
> {
  public parallax = React.createRef()

  constructor(props: any) {
    super(props)
    this.state = {
      index: 0
    }
  }

  public scroll = (to: any) => {
    this.setState({ index: to })
    // @ts-ignore
    this.parallax.scrollTo(to)
  }
  public render() {
    return (
      <div style={{ height: this.props.height }}>
        <Parallax
          className="container"
          // @ts-ignore
          ref={ref => (this.parallax = ref)}
          pages={3}
          horizontal
          scrolling={false}
          style={{ height: this.props.height }}
        >
          <Page
            height={this.props.height}
            offset={0}
            gradient="pink"
            caption="who we are"
            first="Ambitious Developers"
            second="Looking for"
            third="Ambitious Ideas"
            onClick={() => this.scroll(1)}
          />
          <Page
            height={this.props.height}
            offset={1}
            gradient="teal"
            caption="what we do"
            first="Revitalize Brands"
            second="Increase Sales"
            third="Develop Solutions"
            onClick={() => this.scroll(2)}
          />
          <Page
            height={this.props.height}
            offset={2}
            gradient="tomato"
            caption="what we want"
            first="To Make"
            second="Your Vision"
            third="Happen"
            onClick={() => this.scroll(0)}
          />
        </Parallax>
      </div>
    )
  }
}
