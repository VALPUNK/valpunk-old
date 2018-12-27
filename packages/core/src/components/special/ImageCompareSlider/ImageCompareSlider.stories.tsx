import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { CenteredForStories } from "~/components/compositions"
import ImageCompareSlider from "."
;(storiesOf("Form", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Basic Form", () => (
    <CenteredForStories>
      <div style={{ width: "50%" }}>
        <ImageCompareSlider
          leftImage="https://github.com/junkboy0315/react-compare-image/blob/master/public/cat1.jpg?raw=true"
          rightImage="https://github.com/junkboy0315/react-compare-image/blob/master/public/cat2.jpg?raw=true"
        />
      </div>
    </CenteredForStories>
  ))
