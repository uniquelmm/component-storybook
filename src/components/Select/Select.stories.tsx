import { storiesOf } from "@storybook/react";
import React from "react";

import { Select } from "./Select";

const stories = storiesOf("Select", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("Select", () => <Select />);
