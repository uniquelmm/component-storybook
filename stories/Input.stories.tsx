import { storiesOf } from "@storybook/react";
import React from "react";
import Input from "../src/components/Input";
const stories = storiesOf("Input", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("input", () => <Input />);
