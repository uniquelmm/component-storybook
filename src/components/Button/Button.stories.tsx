import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import { Button } from "./Button";

const stories = storiesOf("Button", module);

// useCallback

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

function handleClick() {
  alert(2);
}

stories.add("默认", () => (
  <Button
    color="blue"
    background-color="#1EA7FD"
    backgroundhovercolor="#red"
    onClick={handleClick}
  />
));

stories.add("大小", () => (
  <Container>
    <Button size="small" onClick={handleClick} />
    <Button size="middle" onClick={handleClick} />
    <Button size="large" onClick={handleClick} />
  </Container>
));

stories.add("禁用", () => <Button disabled onClick={handleClick} />);

stories.add("自适应", () => <Button adapter onClick={handleClick} />);

stories.add("加载中", () => <Button loading />);

stories.add("箭头", () => (
  <Button arrow loading={false} onClick={handleClick} />
));
