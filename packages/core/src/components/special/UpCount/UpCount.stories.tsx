import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { CenteredForStories } from "~/components/compositions"
import UpCount from "."
;(storiesOf("Animations", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("UpCount", () => (
    <CenteredForStories>
      <UpCount />
    </CenteredForStories>
  ))
