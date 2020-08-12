import React, { FC } from "react";
import styled, { css } from "styled-components";

const InputContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 13px 11px;

  border: 1px solid #ccc;
  border-radius: 10px;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 36%;

  width: 100%;

  color: #737373;

  font-size: 0.8571428571em;
`;
const InputFrame = styled.input`
  cursor: pointer;

  border: none;

  outline: none;
`;

const Input: FC = ({}) => {
  return (
    <InputContainer>
      <InputLabel>Email or mobile phone number</InputLabel>
      <InputFrame></InputFrame>
    </InputContainer>
  );
};
export default Input;
