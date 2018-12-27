import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { CenteredForStories } from "~/components/compositions"
import ImageCompareSlider from "."
;(storiesOf("Special", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Image Slider", () => (
    <CenteredForStories>
      <div style={{ width: "50%" }}>
        <ImageCompareSlider
          leftImage="https://github.com/junkboy0315/react-compare-image/blob/master/public/cat1.jpg?raw=true"
          rightImage="https://github.com/junkboy0315/react-compare-image/blob/master/public/cat2.jpg?raw=true"
          sliderLineWidth={5}
          handleSize={80}
          sliderPositionPercentage={0.5}
          hover={false}
        />
      </div>
    </CenteredForStories>
  ))
