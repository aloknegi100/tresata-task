import type { FC } from "react";
import type { Task, TaskStatus } from "../../../types/task";
import TaskCategoryBar from "../TaskCategoryBar/TaskCategoryBar";
import TaskCard from "../TaskCard/TaskCard";

interface Props {
  tasks: Task[];
  open: Record<TaskStatus, boolean>;
  setOpen: (open: Record<TaskStatus, boolean>) => void;
}

const TaskSections: FC<Props> = ({ tasks, open, setOpen }) => {
  const filterTasks = (status: TaskStatus) =>
    tasks.filter((t) => t.status === status);

  return (
    <div style={{ marginTop: 8 }}>
      <TaskCategoryBar
        title="Pending"
        count={filterTasks("pending").length}
        isOpen={open.pending}
        onToggle={() => setOpen({ ...open, pending: !open.pending })}
      >
        {filterTasks("pending").map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TaskCategoryBar>

      <TaskCategoryBar
        title="In Progress"
        count={filterTasks("in-progress").length}
        isOpen={open["in-progress"]}
        onToggle={() =>
          setOpen({ ...open, "in-progress": !open["in-progress"] })
        }
      >
        {filterTasks("in-progress").map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TaskCategoryBar>

      <TaskCategoryBar
        title="Completed"
        count={filterTasks("completed").length}
        isOpen={open.completed}
        onToggle={() => setOpen({ ...open, completed: !open.completed })}
      >
        {filterTasks("completed").map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TaskCategoryBar>
    </div>
  );
};

export default TaskSections;
