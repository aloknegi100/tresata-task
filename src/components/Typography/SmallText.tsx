import type { FC, ReactNode } from "react";

interface SmallTextProps {
  children: ReactNode;
  weight?: "bold" | "medium" | "regular";
  color?: string;
  className?: string;
}

const SmallText: FC<SmallTextProps> = ({
  children,
  weight = "regular",
  color = "var(--secondory-text-color)",
  className = "",
}) => {
  return (
    <p
      className={className}
      style={{
        fontSize: "10px", // or use a CSS variable if you want
        fontWeight: `var(--weight-${weight})`,
        color,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};

export default SmallText;
