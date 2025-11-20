import type { FC, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  weight?: "bold" | "medium" | "regular";
  color?: string;
  className?: string;
}

const Text: FC<TextProps> = ({
  children,
  weight = "regular",
  color = "var(--primary-color)",
  className = "",
}) => {
  return (
    <p
      className={className}
      style={{
        fontSize: "var(--normal-text)",
        fontWeight: `var(--weight-${weight})`,
        color,
      }}
    >
      {children}
    </p>
  );
};

export default Text;
