import Taskitem from "./Taskitem";
import { data } from "../../helper/data";

function Task({ setTasks, tasks }) {
  return (
    <div>
      {data.map((taskItem) => (
        <Taskitem key={taskItem.id} taskItem={taskItem} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default Task;
