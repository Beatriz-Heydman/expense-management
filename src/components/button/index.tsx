//Styles
import { StyledButton } from "./styles";

//Types
import { ButtonProps } from "./types";

export function Button({
  children,
  backgroundColor,
  border,
  color,
  width,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      border={border}
      color={color}
      width={width}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
