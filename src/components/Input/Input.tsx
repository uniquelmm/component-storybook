import React, { FC, useCallback, useState } from "react";
import styled, { css } from "styled-components";

import { InputProps, LabelProps } from "../../interfaces";

const InputInterior = styled.div`
  color: #737373;
`;

const InputLabel = styled.label<LabelProps>`
  position: absolute;
  z-index: 1;

  top: 2px;

  display: ${(props) => (props.show ? "none" : "flex")};

  width: 100%;
  margin-top: 0.4285714286em;
  margin-bottom: 6px;
  padding: 0 0.9166666667em;

  color: #737373;

  font-size: 0.8571428571em;
`;

const InputFrame = styled.input`
  display: block;

  box-sizing: border-box;

  width: 100%;

  padding: 0.9285714286em 0.7857142857em;

  color: #333;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline-color: #a26b25;
  background-clip: padding-box;

  font: inherit;
  font-weight: normal;
`;

const HelpText = styled.div`
  color: #737373;
`;

const InputWrapper = styled.div<InputProps>`
  line-height: 1.3em;
  ${(props) => {
    return [
      props.label &&
        props.placeholder &&
        css`
          padding-top: 14px;
        `,
    ];
  }}
`;

export const Input: FC<InputProps> = ({
  // // 错误提示词
  helpText,
  // // 错误
  // error,
  placeholder,
  label,
  value,
  // type,
  // // 失去焦点
  onBlur,
  // // 输入值的变化
  onChange,
  // // 回车输入
  onPressEnter,
}) => {
  let [inputValue, setInputValue] = useState(value);
  const [inputLabel, setInputLabel] = useState(true);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setInputValue = e.target.value;
      // input向下移动
      if (setInputValue) {
        // label出现
        setInputLabel(false);
      } else {
        // label消失
        setInputLabel(true);
      }
    },
    [onChange]
  );
  const handlePressEnter = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        onPressEnter && onPressEnter(e);
      }
    },
    [onPressEnter]
  );
  return (
    <InputWrapper>
      <InputInterior>
        <InputLabel show={inputLabel}>{label}</InputLabel>
        <InputFrame
          placeholder={placeholder}
          value={value}
          // onBlur={onBlur}
          onChange={handleChange}
          onPressEnter={handlePressEnter}
        />
      </InputInterior>
      <HelpText helpText={helpText} />
    </InputWrapper>
  );
};
