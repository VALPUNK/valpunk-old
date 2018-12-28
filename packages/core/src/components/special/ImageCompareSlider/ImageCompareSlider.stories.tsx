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
          leftImage="https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/kush_home.png"
          rightImage="https://s3.us-east-2.amazonaws.com/valpunk-cdn/img/nod_home.png"
          sliderLineWidth={5}
          handleSize={80}
          sliderPositionPercentage={0.5}
          hover={false}
        />
      </div>
    </CenteredForStories>
  ))
