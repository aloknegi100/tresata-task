import type { FC } from "react";
import type { Task, TaskStatus } from "../../../types/task";
import TaskCategoryBar from "../TaskCategoryBar/TaskCategoryBar";
import TaskCard from "../TaskCard/TaskCard";

interface Props {
  tasks: Record<TaskStatus, Task[]>; // <-- grouped tasks
  open: Record<TaskStatus, boolean>;
  setOpen: (open: Record<TaskStatus, boolean>) => void;
}

const TaskSections: FC<Props> = ({ tasks, open, setOpen }) => {
  const statuses: TaskStatus[] = ["pending", "in-progress", "completed"];

  return (
    <div style={{ marginTop: 8 }}>
      {statuses.map((status) => (
        <TaskCategoryBar
          key={status}
          title={status.replace("-", " ")}
          count={tasks[status].length}
          isOpen={open[status]}
          onToggle={() => setOpen({ ...open, [status]: !open[status] })}
        >
          {tasks[status].map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </TaskCategoryBar>
      ))}
    </div>
  );
};

export default TaskSections;
