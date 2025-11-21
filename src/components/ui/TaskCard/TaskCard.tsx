import type { FC } from "react";
import type { Task } from "../../../types/task";
import { SmallText, SubText, Text } from "../../Typography";
import { Pencil, Trash2 } from "lucide-react";
import "./TaskCard.css";

const statusColors: Record<Task["status"], string> = {
  pending: "#D0D0D0",
  "in-progress": "#FFB03C",
  completed: "#368A04",
};

interface Props {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
}
const formatTaskDate = (isoString?: string) => {
  if (!isoString) return;
  const d = new Date(isoString);

  const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
  const day = d.toLocaleDateString("en-US", { day: "2-digit" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const year = d.getFullYear();

  return `${weekday} ${day}, ${month} ${year}`;
};

const TaskCard: FC<Props> = ({ task, onEdit, onDelete }) => {
  const firstChar = task.title.charAt(0).toUpperCase();

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(task);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(task.id);
  };

  return (
    <div className="task-card">
      <div className="task-circle">{firstChar}</div>
      <div className="task-container">
        <div className="task-card-header">
          <div className="task-left">
            <Text weight="medium">{task.title}</Text>
          </div>
          <div className="task-status">
            <span
              className="status-bullet"
              style={{ backgroundColor: statusColors[task.status] }}
            ></span>
            <SubText>{task.status.replace("-", " ")}</SubText>
          </div>
        </div>
        <SubText className="task-desc">{task.description}</SubText>
        <div className="task-card-footer">
          <SmallText>{formatTaskDate(task.date)}</SmallText>
          <div className="task-actions">
            <button
              className="action-btn edit-btn"
              onClick={handleEdit}
              aria-label="Edit task"
            >
              <Pencil size={16} color="var(--primary-color)" />
            </button>
            <button
              className="action-btn delete-btn"
              onClick={handleDelete}
              aria-label="Delete task"
            >
              <Trash2 size={16} color="var(--danger-color)" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
