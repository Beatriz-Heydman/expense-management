//Libs
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonStyledProps & {
  children: ReactNode;
};

export type ButtonStyledProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundColor?: string;
  border?: string;
  color?: string;
  width?: string;
};
