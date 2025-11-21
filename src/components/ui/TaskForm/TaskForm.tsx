import { useState, useEffect, type FC } from "react";
import type { Task, TaskStatus } from "../../../types/task";
import Button from "../Button/Button";
import "./TaskForm.css";
import Input from "../Input/Input";

interface TaskFormProps {
  initialTask?: Partial<Task>;
  onSubmit: (task: Omit<Task, "id">) => void;
  onCancel:()=>void;
  submitText?: string;
  type?:"add"|"edit";
}

const TaskForm: FC<TaskFormProps> = ({
  initialTask,
  onSubmit,
  submitText = "Save Task",
  onCancel,
  type="add"
}) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");
  const [status, setStatus] = useState<TaskStatus>(initialTask?.status || "pending");

  useEffect(() => {
    setTitle(initialTask?.title || "");
    setDescription(initialTask?.description || "");
    setStatus(initialTask?.status || "pending");
  }, [initialTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Title and Description are required");
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      status,
    });

    if (!initialTask) {
      setTitle("");
      setDescription("");
      setStatus("pending");
    }
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            required
          />
          <Input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
            required
          />

          {type === 'edit' && (
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
          )}
        <div className="form-button-container">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit">{submitText}</Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
