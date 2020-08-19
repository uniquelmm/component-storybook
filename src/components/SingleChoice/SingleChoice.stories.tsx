import { storiesOf } from "@storybook/react";
import React from "react";

import { SingleChoice } from "./SingleChoice";

const stories = storiesOf("SingleChoice", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("SingleChoice", () => <SingleChoice />);
