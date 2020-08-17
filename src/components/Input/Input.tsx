import React, { FC, useCallback, useState } from "react";
import styled, { css } from "styled-components";

import { InputProps } from "../../interfaces";

const InputInterior = styled.div`
  color: red;
`;

const InputLabel = styled.label<InputProps>`
  position: absolute;
  z-index: 1;

  top: 4px;

  display: ${(props) => (props.show ? "none" : "flex")};

  width: 100%;
  margin-top: 0.4285714286em;
  margin-bottom: 6px;
  padding: 0 0.9166666667em;

  transition: all 0.5s ease-out;
  transform: translateY(3px);

  color: #737373;

  ${(props) => {
    // eslint-disable-next-line eqeqeq
    if (props.value == "" && props.type == "email")
      return css`
        visibility: hidden;
      `;
  }}
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
  visibility: hidden;

  margin: 0.5714285714em 0 0.2857142857em;

  color: red;
`;

const InputWrapper = styled.div<InputProps>`
  line-height: 1.3em;
  ${(props) => {
    return (
      props.error &&
      css`
        ${HelpText} {
          visibility: visible;
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.value &&
      css`
        ${InputFrame} {
          padding-top: 20px;
        }
      `
    );
  }}
`;

export const Input: FC<InputProps> = ({
  // 错误提示词
  helpText,
  // 错误
  error,
  placeholder,
  label,
  value,
  type = "text",
  // 失去焦点
  onBlur,
  // 输入值的变化
  onChange,
  // 回车
  onPressEnter,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputLabel, setInputLabel] = useState(true);

  // 输入值的变化
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { value } = e.target;
      // input向下移动
      if (inputValue) {
        // label出现
        onChange && onChange(value);
        setInputLabel(false);
        return setInputValue(value);
      } else {
        onChange && onChange(value);
        return setInputValue(value);
      }
    },
    [onChange, inputValue]
  );

  // 回车
  const handlePressEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        return onPressEnter && onPressEnter(e);
      }
    },
    [onPressEnter]
  );

  // 失去焦点
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur && onBlur(e.target.value);
    },
    [onBlur]
  );
  return (
    <InputWrapper error={error}>
      <InputInterior>
        <InputLabel show={inputLabel}>{label}</InputLabel>
        <InputFrame
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={(e) => onPressEnter && handlePressEnter(e)}
        />
      </InputInterior>
      <HelpText>{helpText}</HelpText>
    </InputWrapper>
  );
};
