import type { FC, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./TaskCategoryBar.css";
import { SubText } from "../../Typography";

interface Props {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const TaskCategoryBar: FC<Props> = ({
  title,
  count,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="category-wrapper">
      <div className="category-bar" onClick={onToggle}>
        <SubText>
          {title} <b>({count})</b>
        </SubText>
        {isOpen ? (
          <ChevronUp className="chevron" />
        ) : (
          <ChevronDown className="chevron" />
        )}
      </div>

      {isOpen && <div className="category-content">{children}</div>}
    </div>
  );
};

export default TaskCategoryBar;
