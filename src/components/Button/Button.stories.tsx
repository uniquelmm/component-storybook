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

stories.add("默认", () => (
  <Button color="blue" background-color="#1EA7FD" backgroundhovercolor="#red">
    默认
  </Button>
));

stories.add("大小", () => (
  <Container>
    <Button size="small">小</Button>
    <Button size="middle">中</Button>
    <Button size="large">大</Button>
  </Container>
));

stories.add("禁用", () => <Button disabled>禁用</Button>);

stories.add("自适应", () => <Button adapter>自适应</Button>);

stories.add("加载中", () => (
  <Button disabled loading>
    加载
  </Button>
));

stories.add("箭头", () => (
  <Button arrow loading={false}>
    箭头
  </Button>
));
