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

export const DiscountCode: FC<InputProps> = ({ value, onChange, onClick }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState(value);

  //   const handleClick = useCallback(
  //     (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //       if (e.target.value) {
  //         const { value } = e.target;
  //         if (value) {
  //           if (value.length > 0) {
  //             setInputValue(value);
  //             console.log("我是内容" + inputValue);
  //           }
  //         }
  //       }
  //     },
  //     [onClick, setInputValue]
  //   );

  const handleChange = useCallback(
    (value: string) => {
      if (value.length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [onChange]
  );

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
        <Button
          //   onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}
          disabled={disabled}
        >
          Apply
        </Button>
      </ButtonWrapper>
    </DiscountCodeWrapper>
  );
};
