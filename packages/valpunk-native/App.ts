import StorybookUI from "./storybook";

import App from "./src/App";

module.exports = __DEV__ ? StorybookUI : App;
