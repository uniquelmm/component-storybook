import React, { FC, useCallback, useState } from "react";
import styled, { css } from "styled-components";

import { InputProps } from "../../interfaces";

const InputInterior = styled.div`
  color: red;
`;

const InputLabel = styled.div<InputProps>`
  position: absolute;
  z-index: 1;

  top: 4px;

  display: ${(props) => (props.show ? "none" : "flex")};

  width: 100%;
  margin-top: 0.4285714286em;
  margin-bottom: 6px;
  padding: 0 0.9166666667em;

  transition: all 0.3s ease-out;
  transform: translateY(3px);

  color: #737373;
`;

const InputFrame = styled.input`
  display: block;

  box-sizing: border-box;

  width: 100%;

  padding: 0.8em 0.7857142857em;

  transition: all 0.3s ease-out;
  transform: translateY(3px);

  color: #333;

  border: 1px solid #d9d9d9;

  border-radius: 5px;

  outline-color: #a26b25;

  background-clip: padding-box;

  font: inherit;
  font-weight: normal;
  ${(props) => {
    return [
      props.placeholder &&
        props.value &&
        css`
          padding: 21px 10px 5px;
        `,
    ];
  }}
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
        ${InputFrame} {
          border-color: red;
        }
      `
    );
  }}
`;

export const Input: FC<InputProps> = ({
  helpText,
  error,
  placeholder,
  label,
  value,
  type = "text",
  onBlur,
  onChange,
  onPressEnter,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputLabel, setInputLabel] = useState(true);

  // 输入值的变化
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { value } = e.target;
      if (value.length > 0) {
        // console.log("label" + value.length);
        setInputLabel(false);
        onChange && onChange(value);
        return setInputValue(value);
      }

      if (value.length < 1) {
        // console.log("我没长度了");

        if (type === "email") {
          // console.log("我是email");
          setInputLabel(true);
          onChange && onChange(value);
          return setInputValue(value);
        } else {
          onChange && onChange(value);
          return setInputValue(" ");
        }
      }
    },
    [onChange, setInputValue]
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
