// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners

import React from "react"
import ReactDOM from "react-dom"
import { Parallax, ParallaxLayer } from "react-spring/addons.cjs"
import "./styles.css"

const Page = ({
  offset,
  caption,
  first,
  second,
  third,
  gradient,
  onClick
}: any) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <div>{first}</div>
        <div>{second}</div>
        <div>{third}</div>
      </span>
    </ParallaxLayer>
  </>
)

export default class extends React.Component {
  public parallax = React.createRef()
  // @ts-ignore
  public scroll = (to: any) => this.parallax.scrollTo(to)
  public render() {
    return (
      <Parallax
        className="container"
        // @ts-ignore
        ref={ref => (this.parallax = ref)}
        pages={3}
        horizontal
        scrolling={false}
        style={{ height: 1000 }}
      >
        <Page
          offset={0}
          gradient="pink"
          caption="who we are"
          first="Ambitious Developers"
          second="Looking for"
          third="Ambitious Ideas"
          onClick={() => this.scroll(1)}
        />
        <Page
          offset={1}
          gradient="teal"
          caption="what we do"
          first="Reinvent Brands"
          second="Increase Sales"
          third="Develop Solutions"
          onClick={() => this.scroll(2)}
        />
        <Page
          offset={2}
          gradient="tomato"
          caption="what we want"
          first="Ambitious Ideas"
          second="est dignissim"
          onClick={() => this.scroll(0)}
        />
      </Parallax>
    )
  }
}
