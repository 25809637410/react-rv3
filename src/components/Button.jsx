import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as AlertIcon } from "../assets/icons/alert.svg";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  margin-right: 10px;
  margin-bottom: 10px;

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 16px;
      padding: 12px 24px;
      width: 280px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      width: 120px;
      font-size: 14px;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 12px;
      padding: 8px 16px;
      width: 80px;
    `}

  ${(props) =>
    props.$variant === "primary" &&
    css`
      background-color: #74edbb;
      color: black;
      border: 2px solid #74edbb;
      &:hover {
        background-color: #fff;
        color: #222;
      }
    `}

  ${(props) =>
    props.$variant === "negative" &&
    css`
      background-color: #f08080;
      color: #222;
      border: 2px solid #f08080;
      &:hover {
        background-color: #fff;
        color: #222;
      }
    `}
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  display: inline-flex;
  margin-left: 8px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

function Button({
  children,
  size = "medium",
  variant = "primary",
  onClick,
  icon,
  ...props
}) {
  return (
    <StyledButton size={size} $variant={variant} onClick={onClick} {...props}>
      {children}
      {icon && <Icon>{icon}</Icon>}
    </StyledButton>
  );
}

function ButtonGroup() {
  const handleFirstButtonClick = () => {
    alert("You clicked the first button!");
  };

  const handleFourthButtonClick = () => {
    const input = prompt("You clicked the fourth button. Enter something:");
    if (input) alert(`You entered: ${input}`);
  };

  return (
    <ButtonContainer>
      <h1>Button</h1>
      <ButtonRow>
        <Button size="large" variant="primary" onClick={handleFirstButtonClick}>
          Large Primary Button
          <Icon>
            <ArrowIcon />
          </Icon>
        </Button>
        <Button size="medium" variant="primary">
          Medium
        </Button>
        <Button size="small" variant="primary">
          Small
        </Button>
      </ButtonRow>
      <ButtonRow>
        <Button
          size="large"
          variant="negative"
          onClick={handleFourthButtonClick}
        >
          Large Negative Button
          <Icon>
            <AlertIcon />
          </Icon>
        </Button>
        <Button size="medium" variant="negative">
          Medium
        </Button>
        <Button size="small" variant="negative">
          Small
        </Button>
      </ButtonRow>
    </ButtonContainer>
  );
}

export default ButtonGroup;
export { Button };
