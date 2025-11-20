import type { FC, ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${className}`}
      style={{
        width: fullWidth ? "100%" : undefined,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
