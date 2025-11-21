import type { FC } from "react";
import type { Task, TaskStatus } from "../../../types/task";
import TaskCategoryBar from "../TaskCategoryBar/TaskCategoryBar";
import TaskCard from "../TaskCard/TaskCard";
import { useNavigate } from "react-router-dom";
import { SubText } from "../../Typography";
import "./TaskSections.css";

interface Props {
  tasks: Record<TaskStatus, Task[]>;
  open: Record<TaskStatus, boolean>;
  setOpen: (open: Record<TaskStatus, boolean>) => void;
  onDelete?: (taskId: string) => void; // Add this
}

const TaskSections: FC<Props> = ({ tasks, open, setOpen, onDelete }) => {
  const navigate = useNavigate();
  const statuses: TaskStatus[] = ["pending", "in-progress", "completed"];

  const handleToggle = (status: TaskStatus) => {
    setOpen({
      ...open,
      [status]: !open[status],
    });
  };

  const onEdit = (task: Task) => navigate(`/edit-task/${task.id}`);

  const formatTitle = (status: TaskStatus): string => {
    const formatMap: Record<TaskStatus, string> = {
      pending: "Pending",
      "in-progress": "In Progress",
      completed: "Completed",
    };
    return formatMap[status];
  };

  if (!tasks || typeof tasks !== "object") {
    return <div>Loading tasks...</div>;
  }

  const safeTasks = {
    pending: tasks.pending || [],
    "in-progress": tasks["in-progress"] || [],
    completed: tasks.completed || [],
  };

  const allEmpty = statuses.every((status) => safeTasks[status]?.length === 0);

  if (allEmpty) {
    return (
      <div className="empty-state">
        <SubText color="var(--text-muted-color)">
          No tasks yet. Create your first task to get started!
        </SubText>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 8 }}>
      {statuses.map((status) => (
        <TaskCategoryBar
          key={status}
          title={formatTitle(status)}
          count={safeTasks[status]?.length || 0}
          isOpen={open[status]}
          onToggle={() => handleToggle(status)}
        >
          {open[status] &&
            safeTasks[status]?.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
        </TaskCategoryBar>
      ))}
    </div>
  );
};

export default TaskSections;
