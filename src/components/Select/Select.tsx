import React, { FC } from "react";
import styled, { css } from "styled-components";
export interface SelectProps {
  label?: string;
}

const SelectWrapper = styled.div`
  display: block;
  float: left;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 0.4285714286em;

  padding: 0.9285714286em 0.7857142857em;

  word-wrap: break-word;

  word-break: normal;
  word-break: break-word;

  border: 1px transparent solid;
  border-radius: 5px;

  background-clip: padding-box;

  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif; */
  font-size: 14px;
  line-height: 1.3em;

  line-height: inherit;
  -webkit-font-smoothing: subpixel-antialiased;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const LabelWrapper = styled.label`
  position: absolute;

  margin: 6px 0;
  padding: 0 11px;

  color: #737373;

  font-size: 0.8571428571em;
`;

const SelectOption = styled.select`
  width: 100%;
  padding: 0.9285714286em 0.7857142857em;
  padding-top: 1.5em;
  padding-bottom: 0.3571428571em;

  border: 1px solid #d9d9d9;

  border-radius: 5px;
  outline-color: #a26b25;
  appearance: none;
`;

const Option = styled.option`
  display: block;

  min-height: 1.2em;
  padding: 0 2px 1px;

  white-space: pre;

  color: #000;
  background-color: #fff;

  font-weight: normal;
`;

const CaretWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;

  display: block;

  width: 2.1428571429em;
  height: 43%;

  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
  pointer-events: none;

  color: #919191;
  fill: currentColor;

  border-left: 1px rgba(179, 179, 179, 0.5) solid;
`;

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;

  display: inline-block;

  width: 10px;
  height: 10px;
  margin-left: -2px;

  transform: translate(-50%, -50%);
  transform-origin: 0 0;
  vertical-align: middle;

  color: #919191;
  fill: currentColor;
`;

const Path = styled.path`
  d: path("M 0 3 h 10 L 5 8");
  fill-rule: nonzero;
`;

export const Select: FC<SelectProps> = ({ label = "Country/Region" }) => {
  return (
    <>
      <SelectWrapper>
        <InputWrapper>
          <LabelWrapper>{label}</LabelWrapper>
          <SelectOption>
            <Option>Japan</Option>
            <Option>United States</Option>
            <Option>Afghanistan</Option>
            <Option>Åland Islands</Option>
            <Option>Albania</Option>
            <Option>Algeria</Option>
            <Option>Angola</Option>
          </SelectOption>
          <CaretWrapper>
            <Svg>
              <Path />
            </Svg>
          </CaretWrapper>
        </InputWrapper>
      </SelectWrapper>
    </>
  );
};
