import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div>
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
