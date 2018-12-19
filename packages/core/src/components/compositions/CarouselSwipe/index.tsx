import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export interface CarouselSwipeProps {
  pages: number;
  children: (
    props: {
      nextSlide: () => void;
      prevSlide: () => void;
      handleNextPage: (page: number) => void;
      handleChangeIndex: (page: number) => void;
      index: number;
    }
  ) => React.ReactNode;
}

class CarouselSwipe extends React.Component<
  CarouselSwipeProps,
  { index: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 0
    };
    this.nextSlide.bind(this);
    this.prevSlide.bind(this);
    this.handleNextPage.bind(this);
  }

  public nextSlide = () => {
    if (this.state.index < this.props.pages - 1) {
      this.setState({
        index: this.state.index + 1
      });
    }
  };

  public prevSlide = () => {
    if (this.state.index !== 0) {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  public handleNextPage = (page: number) => {
    this.setState({
      index: page
    });
  };

  public handleChangeIndex = (index: number) => {
    this.setState({
      index
    });
  };

  public render() {
    return (
      <div style={{ position: "relative" }}>
        {this.props.children({
          nextSlide: this.nextSlide,
          prevSlide: this.prevSlide,
          handleNextPage: this.handleNextPage,
          handleChangeIndex: this.handleChangeIndex,
          index: this.state.index
        })}
      </div>
    );
  }
}

export default CarouselSwipe;

interface CarouselNavProps {
  onClick: any;
  selected?: boolean;
}

export const CarouselNav = ({ onClick, selected }: CarouselNavProps) => {
  const size = selected ? 25 : 20;
  return (
    <CarouselButton onClick={onClick}>
      <div
        style={{
          backgroundColor: "white",
          height: size,
          width: size,
          borderRadius: size / 2,
          margin: 10,
          cursor: "pointer"
        }}
      />
    </CarouselButton>
  );
};

export interface CarouselButtonProps {
  children?: React.ReactNode;
  onClick?: any;
  style?: React.CSSProperties;
}

export const CarouselButton = ({
  children,
  style,
  ...rest
}: CarouselButtonProps) => {
  return (
    <span style={{ ...style, zIndex: 1 }} {...rest}>
      {children}
    </span>
  );
};
