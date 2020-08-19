import { KeyboardEventHandler, ReactNode } from "react";
export interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  backgroundhovercolor?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "middle" | "large";
  adapter?: boolean;
  arrow?: boolean;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface InputProps {
  helpText?: ReactNode;
  error?: boolean;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  placeholder?: string;
  label?: string;
  value?: string | number | readonly string[];
  type?: string;
  show?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
