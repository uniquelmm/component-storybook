import React, { FC } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  color?: string;
  backgroundcolor?: string;
  backgroundhovercolor?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: "small" | "middle" | "large";
  adapter?: boolean;
  arrow?: boolean;
}

const ContainerButton = styled.button<ButtonProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 10px 12px;

  cursor: pointer;

  color: ${(props) => props.color};

  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundcolor};
  &:hover {
    background-color: ${(props) => props.backgroundhovercolor};
  }

  ${(props) => {
    let height;
    let width;
    switch (props.size) {
      case "small":
        height = "30px";
        width = "60px";
        break;
      case "middle":
        height = "40px";
        width = "70px";
        break;
      case "large":
        height = "50px";
        width = "80px";
    }
    return (
      props.size &&
      css`
        width: ${width};
        height: ${height};
      `
    );
  }}
`;
const Button: FC<ButtonProps> = ({
  color = "#fff",
  backgroundcolor = "#1EA7FD",
  backgroundhovercolor = "#7FCAF9v",
  size,
}) => {
  return (
    <>
      <ContainerButton
        color={color}
        backgroundcolor={backgroundcolor}
        backgroundhovercolor={backgroundhovercolor}
        size={size}
      >
        Button
      </ContainerButton>
    </>
  );
};

export default Button;
