import StorybookUI from "./storybook";

import App from "./src/App";

// @ts-ignore
module.exports = __DEV__ ? StorybookUI : App;
