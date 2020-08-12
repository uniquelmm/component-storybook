import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "../src/components/Button";

const stories = storiesOf("Button", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});
// color={"red"}
stories.add("默认", () => (
  <Button
    color="blue"
    backgroundcolor="#1EA7FD"
    backgroundhovercolor="#7FCAF9v"
  />
));

stories.add("大小", () => (
  <>
    <Button size="small" />
    <Button size="middle" />
    <Button size="large" />
  </>
));

stories.add("禁用", () => <Button disabled={true} />);
// stories.add("自适应", () => <Button />);
// stories.add("加载中", () => <Button />);
// stories.add("箭头", () => <Button />);
