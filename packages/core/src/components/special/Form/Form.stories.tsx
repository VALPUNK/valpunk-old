import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Form from ".";
import { CenteredForStories } from "~/components/compositions";
(storiesOf("Form", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Basic Form", () => (
    <CenteredForStories>
      <Form />
    </CenteredForStories>
  ));
