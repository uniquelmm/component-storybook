import React, { FC, useCallback, useState } from "react";
import styled, { css } from "styled-components";

export interface SingleChoiceProps {
  checked?: boolean;
  onFocus?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const ChoiceWrapper = styled.div<SingleChoiceProps>`
  color: #545454;
  border: 1px solid;

  border-color: #d9d9d9;
  border-radius: 5px;
  background: #fff;
  background-clip: padding-box;

  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif; */
  font-size: 14px;
`;

const RadioInput = styled.div`
  display: table-cell;

  padding-right: 0.75em;

  white-space: nowrap;
`;

const StandardRadioInput = styled.input`
  position: relative;

  box-sizing: border-box;

  width: 18px;

  height: 18px;

  cursor: pointer;

  transition: all 0.2s ease-in-out;
  vertical-align: -4px;

  color: transparent;

  border: 1px solid;

  border-color: #d9d9d9;
  border-radius: 50%;

  outline-offset: 0.17rem;

  ${(props) => {
    return [
      props.checked &&
        css`
          border: none;
          -webkit-box-shadow: 0 0 0 10px #a26b25 inset;

          box-shadow: 0 0 0 10px #a26b25 inset;
        `,
    ];
  }}
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    display: block;

    width: 34px;
    height: 34px;

    content: "";

    opacity: 1;
    border-radius: 50%;
    background-color: red;
  }
`;

const StandardWrapper = styled.div`
  position: relative;

  display: table;

  zoom: 1;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;

  padding: 16px;
  padding: 1.1428571429em;

  cursor: pointer;

  border-bottom: 1px solid #d9d9d9;

  &::before {
    display: table;

    content: "";
  }
`;

const SingleChoiceWrapper = styled.div`
  color: #fff;
`;

const StandardRadioLabel = styled.label`
  display: table-cell;

  width: 100%;

  vertical-align: middle;
`;

const Standard = styled.span`
  display: table-cell;

  width: 100%;

  vertical-align: top;

  font-family: inherit;
`;

const StandardPrice = styled.span`
  display: table-cell;

  padding-left: 0.75em;

  text-align: right;
  white-space: nowrap;

  color: #333;

  font-weight: 500;
`;

const ExpressWrapper = styled.div`
  position: relative;

  display: table;

  zoom: 1;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;

  padding: 16px;
  padding: 1.1428571429em;

  cursor: pointer;
`;

const ExpressRadioLabel = styled.label`
  display: table-cell;

  width: 100%;

  vertical-align: middle;
`;

const Express = styled.span`
  display: table-cell;

  width: 100%;

  vertical-align: top;

  font-family: inherit;
`;

const ExpressPrice = styled.span`
  display: table-cell;

  padding-left: 0.75em;

  text-align: right;
  white-space: nowrap;

  color: #333;

  font-weight: 500;
`;

export const SingleChoice: FC<SingleChoiceProps> = ({
  checked,
  onClick,
  onFocus,
}) => {
  const [selectedValue, setSelectedValue] = useState("Standard");

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      console.log("radio checked:" + event.target.value);
      setSelectedValue(event.target.value);
    },
    []
  );

  return (
    <ChoiceWrapper checked={checked}>
      <SingleChoiceWrapper>
        <StandardWrapper>
          <RadioInput>
            <StandardRadioInput
              checked={selectedValue === "Standard"}
              onClick={handleClick}
              value="Standard"
              name="StandardRadio"
            />
          </RadioInput>
          <StandardRadioLabel>
            <Standard>Standard</Standard>
            <StandardPrice>$5.99</StandardPrice>
          </StandardRadioLabel>
        </StandardWrapper>

        <ExpressWrapper>
          <RadioInput>
            <StandardRadioInput
              checked={selectedValue === "Express"}
              onClick={handleClick}
              value="Express"
              name="ExpressRadio"
            />
          </RadioInput>

          <ExpressRadioLabel>
            <Express>Express</Express>
            <ExpressPrice>$9.99</ExpressPrice>
          </ExpressRadioLabel>
        </ExpressWrapper>
      </SingleChoiceWrapper>
    </ChoiceWrapper>
  );
};
