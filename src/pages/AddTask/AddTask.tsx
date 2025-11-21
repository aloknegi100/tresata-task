import { useNavigate } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import TaskForm from "../../components/ui/TaskForm/TaskForm";

const AddTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleAdd = (task: Parameters<typeof addTask>[0]) => {
    addTask(task);
    navigate("/"); 
  };

  const handleCancel = () => {
    navigate("/"); 
  };


  return <TaskForm onSubmit={handleAdd} submitText="Add Task" onCancel={handleCancel}  />;
};

export default AddTask;
