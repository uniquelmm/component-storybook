import React, { FC } from "react";
import styled, { css } from "styled-components";

import { ButtonProps } from "../../interfaces";

const useSize = (size: string) => {
  const sizeInfo = {
    small: {
      height: "30px",
      width: "60px",
    },
    middle: {
      height: "40px",
      width: "70px",
    },
    large: {
      height: "50px",
      width: "60px",
    },
  };

  if (size === "small") return sizeInfo.small;
  if (size === "middle") return sizeInfo.middle;
  if (size === "large") return sizeInfo.large;
};

const LoadingSvg = styled.svg`
  position: absolute;

  display: inline-block;

  animation: loadingCircle 1s infinite linear;
  .i-icon-loading-spin {
    display: inline-block;

    animation: loadingCircle 1s infinite linear;
  }
  @-webkit-keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loadingCircle {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const ArrowSvg = styled.svg`
  position: absolute;

  width: 20px;
  height: 17px;
`;

const WrapperButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content:center;

  padding: 10px 12px;
  
  cursor: pointer;
 
  color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: ${(props) => props.backgroundColor || "#1EA7FD"};
  &:hover {
    background-color: ${(props) =>
      props.backgroundhovercolor && props.backgroundhovercolor};
  }
 
   ${(props) => {
     if (!props.size) return;
     const sizeInfo = useSize(props.size);
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
   }};

  ${(props) => {
    let opacity;
    let pointerEvents;
    if (props.disabled) {
      opacity = 0.5;
      pointerEvents = "none";
    } else {
      opacity = 1;
      pointerEvents = "auto";
    }
    return (
      props.disabled &&
      css`
        pointer-events: ${pointerEvents};

        opacity: ${opacity};
      `
    );
  }};
  
  ${(props) => {
    let display;

    let justifyContent;
    if (props.adapter) {
      display = "flex";
      justifyContent = "center";
    } else {
      return;
    }
    return (
      props.adapter &&
      css`
        @media screen and (max-width: 768px) {
          display: ${display};
          justify-content: ${justifyContent};

          width: 80%;

          margin: auto;
        }
      `
    );
  }}

  ${(props) => {
    let opacity;
    let pointerEvents;
    if (props.loading) {
      opacity = 1;
      pointerEvents = "auto";
    } else {
      opacity = 0.5;
      pointerEvents = "none";
    }
    return (
      props.loading &&
      css`
        pointer-events: ${pointerEvents};

        opacity: ${opacity};
      `
    );
  }}

 ${(props) => {
   return [
     props.loading &&
       css`
         & div {
           visibility: hidden;
         }
       `,
   ];
 }}

 ${(props) => {
   return [
     props.arrow &&
       css`
         && div {
           visibility: hidden;
         }
       `,
   ];
 }}

`;

export const Button: FC<ButtonProps> = ({
  color = "#fff",
  backgroundColor,
  backgroundhovercolor = "#red",
  size,
  disabled,
  adapter,
  arrow,
  loading = false,
  value = "Button",
  onClick,
}) => {
  return (
    <WrapperButton
      color={color}
      backgroundColor={backgroundColor}
      backgroundhovercolor={backgroundhovercolor}
      size={size}
      disabled={disabled}
      adapter={adapter}
      loading={loading}
      value={value}
      arrow={arrow}
      onClick={onClick}
    >
      {loading && (
        <LoadingSvg
          viewBox="0 0 1024 1024"
          data-icon="loading"
          width="1.2em"
          height="1.2em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
        </LoadingSvg>
      )}

      {arrow ? (
        <ArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z "
            fill="white"
          />
        </ArrowSvg>
      ) : (
        ""
      )}
      <div> {value}</div>
    </WrapperButton>
  );
};
