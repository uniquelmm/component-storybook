import { storiesOf } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

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

stories.add("text input", () => <Input />);

stories.add("placeholder input", () => (
  <Input
    placeholder="first name"
    label="first name"
    onChange={(value) => console.log(value)}
  />
));

stories.add("label input", () => (
  <Input
    placeholder="first name"
    label="first"
    onChange={(value) => console.log(value)}
  />
));

stories.add("email input", () => (
  <Input
    type="email"
    placeholder="Email or mobile phone number"
    label="Email or mobile phone number"
    onChange={(value) => console.log(value)}
  />
));

stories.add("error input", () => (
  <Input
    placeholder="Email or mobile phone number"
    label="Email or mobile phone number"
    helpText="Enter a valid email or a mobile phone number"
    error
  />
));

stories.add("handle input", () => (
  <>
    <Input value="change" onChange={(value) => console.log(value)} />
    <Input value="blur" onBlur={(e) => console.log(e)} />
    <Input value="enter" onPressEnter={(e) => console.log(e)} />
  </>
));
