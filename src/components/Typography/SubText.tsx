import type { FC, ReactNode } from "react";

interface SubTextProps {
  children: ReactNode;
  weight?: "bold" | "medium" | "regular";
  color?: string;
  className?: string;
}

const SubText: FC<SubTextProps> = ({
  children,
  weight = "regular",
  color = "var(--primary-text-color)",
  className = "",
}) => {
  return (
    <span
      className={className}
      style={{
        fontSize: "var(--sub-text)",
        fontWeight: `var(--weight-${weight})`,
        color,
      }}
    >
      {children}
    </span>
  );
};

export default SubText;
