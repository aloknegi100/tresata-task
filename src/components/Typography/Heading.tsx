import type { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  weight?: "bold" | "medium" | "regular";
  color?: string;
  className?: string;
}

const Heading: FC<HeadingProps> = ({
  children,
  weight = "medium",
  color = "var(--primary-color)",
  className = "",
}) => {
  return (
    <h1
      className={className}
      style={{
        fontSize: "var(--heading-text)",
        fontWeight: `var(--weight-${weight})`,
        color,
      }}
    >
      {children}
    </h1>
  );
};

export default Heading;
