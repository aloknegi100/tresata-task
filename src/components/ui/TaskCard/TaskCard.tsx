import type { FC } from "react";
import type { Task } from "../../../types/task";
import { SmallText, SubText, Text } from "../../Typography";
import "./TaskCard.css";

const statusColors: Record<Task["status"], string> = {
  pending: "#999999", // gray
  "in-progress": "#0aab00", // green
  completed: "#ff4d4f", // red
};

const TaskCard: FC<{ task: Task }> = ({ task }) => {
  const firstChar = task.title.charAt(0).toUpperCase();

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
      <SmallText>{task.date}</SmallText>
    </div>
  );
};

export default TaskCard;
