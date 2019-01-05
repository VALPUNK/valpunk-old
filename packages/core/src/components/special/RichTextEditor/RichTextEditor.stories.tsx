import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import RichTextEditor from "./index"
import { CenteredForStories } from "~/components/compositions"
;(storiesOf("Rich Text Editor", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Basi", () => (
    <CenteredForStories>
      <RichTextEditor />
    </CenteredForStories>
  ))
