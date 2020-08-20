import React, { FC, MouseEvent, useCallback, useState } from "react";
import styled, { css } from "styled-components";

import { InputProps } from "../../interfaces";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const DiscountCodeWrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 10px;
`;

export const DiscountCode: FC<InputProps> = ({ value }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState(value);

  const handleClick = useCallback(() => {
    console.log("折扣码-----" + inputValue);
  }, [inputValue]);

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
    if (value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, []);

  return (
    <DiscountCodeWrapper>
      <InputWrapper>
        <Input
          value={inputValue}
          placeholder="Discount code"
          label="Discount code"
          onChange={handleChange}
        />
      </InputWrapper>

      <ButtonWrapper>
        <Button onClick={handleClick} disabled={disabled}>
          Apply
        </Button>
      </ButtonWrapper>
    </DiscountCodeWrapper>
  );
};
