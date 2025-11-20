import type { FC } from "react";
import type { TaskStatus } from "../../../types/task";
import "./TaskStatusBadge.css";

const TaskStatusBadge: FC<{ status: TaskStatus }> = ({ status }) => {
  return <span className={`status-badge ${status}`}>{status}</span>;
};

export default TaskStatusBadge;
