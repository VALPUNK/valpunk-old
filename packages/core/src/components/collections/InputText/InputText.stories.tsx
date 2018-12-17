import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { CenteredForStories } from "~/components/compositions";

(storiesOf("Inputs", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Basic Input", () => <CenteredForStories>123</CenteredForStories>);
