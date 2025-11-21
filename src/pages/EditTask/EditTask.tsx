import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import TaskForm from "../../components/ui/TaskForm/TaskForm";

const EditTask = () => {
  const { tasks, updateTask } = useTasks();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const taskToEdit = tasks.find((t) => t.id === id);

  if (!taskToEdit) return <div>Task not found</div>;

  const handleUpdate = (updated: Parameters<typeof updateTask>[1]) => {
    updateTask(id!, updated);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <TaskForm
      initialTask={taskToEdit}
      onSubmit={handleUpdate}
      onCancel={handleCancel}
      submitText="Update"
      type="edit"
    />
  );
};

export default EditTask;
