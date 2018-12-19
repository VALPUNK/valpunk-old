import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {
  CarouselContainer,
  CarouselNav
} from "../../../components/compositions";

export interface CarouselProps {
  pages: number;
  interval?: number;
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default class Carousel extends React.Component<CarouselProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <CarouselContainer pages={this.props.pages}>
        {({
          index,
          nextSlide,
          prevSlide,
          handleNextPage,
          handleChangeIndex
        }) => {
          const Buttons = [];

          for (let i = 0; i < this.props.pages; i++) {
            Buttons.push(
              <CarouselNav
                onClick={() => handleNextPage(i)}
                selected={index === i}
              />
            );
          }

          return (
            <div style={{ position: "relative" }}>
              <AutoPlaySwipeableViews
                interval={this.props.interval || 5000}
                index={index}
                onChangeIndex={handleChangeIndex}
              >
                {this.props.children}
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
                {Buttons}
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
          );
        }}
      </CarouselContainer>
    );
  }
}
