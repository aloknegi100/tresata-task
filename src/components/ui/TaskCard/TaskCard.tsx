import type { FC } from "react";
import type { Task } from "../../../types/task";
import { SmallText, SubText, Text } from "../../Typography";
import { Pencil, Trash2 } from "lucide-react";
import "./TaskCard.css";

const statusColors: Record<Task["status"], string> = {
  pending: "#999999",
  "in-progress": "#0aab00", 
  completed: "#ff4d4f", 
};

interface Props {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
}

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
      <div className="task-card-header">
        <div className="task-left">
          <div className="task-circle">{firstChar}</div>
          <Text>{task.title}</Text>
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
        <SmallText>{task.date}</SmallText>
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
            <Trash2 size={16} color="var(--danger-color)"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;