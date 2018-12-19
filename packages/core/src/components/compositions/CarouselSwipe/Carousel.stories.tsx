import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CarouselSwipe, { CarouselNav } from "./index";

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

(storiesOf("Animated", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Carousel Swipe", () => (
    // <Grid container={true} justify="center" style={{ padding: 50 }}>
    //   <Grid item={true} lg={3} md={6} sm={8} xs={12} style={{ padding: 20 }}>
    <CarouselSwipe pages={3}>
      {({ index, nextSlide, prevSlide, handleNextPage, handleChangeIndex }) => (
        <div>
          <AutoPlaySwipeableViews
            interval={5000}
            index={index}
            onChangeIndex={handleChangeIndex}
          >
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              slide n°1
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>
              slide n°3
            </div>
          </AutoPlaySwipeableViews>
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <NavigateBeforeIcon
              style={{
                fontSize: 50,
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={prevSlide}
            />
            <CarouselNav
              onClick={() => handleNextPage(0)}
              selected={index === 0}
            />
            <CarouselNav
              onClick={() => handleNextPage(1)}
              selected={index === 1}
            />
            <CarouselNav
              onClick={() => handleNextPage(2)}
              selected={index === 2}
            />
            <NavigateNextIcon
              style={{
                fontSize: 50,
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={nextSlide}
            />
          </div>
        </div>
      )}
    </CarouselSwipe>

    //   </Grid>
    // </Grid>
  ));
