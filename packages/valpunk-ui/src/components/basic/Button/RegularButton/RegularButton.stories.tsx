import { withInfo } from "@storybook/addon-info";
import { text } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Button from "./RegularButton";
(storiesOf("Button", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Vanilla", () => <Button>{text("Text for the button", "123")}</Button>)
  .add("Error", () => <Button>1234567</Button>);
// .addWithJSX("Error", () => <Button error>1234567</Button>)
