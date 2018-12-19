import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Carousel from "./index";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative"
  },
  slide: {
    padding: 15,
    minHeight: 500,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

(storiesOf("Carousel", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Simple Carousel", () => (
    <Carousel pages={3} interval={5000}>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
      </div>
    </Carousel>
  ));
