import { storiesOf } from "@storybook/react";
import React from "react";

import { DiscountCode } from "./DiscountCode";

const stories = storiesOf("DiscountCode", module);

stories.addParameters({
  info: {
    inline: true,
    header: false,
  },
  options: {
    panelPosition: "right", // 操作面板在右边
  },
});

stories.add("DiscountCode", () => (
  <DiscountCode value="" onChange={(value) => console.log(value)} />
));
