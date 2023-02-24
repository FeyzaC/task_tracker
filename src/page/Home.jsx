import axios from "axios";
import { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);
  const url = "https://63f87f376978b1f9105aadd4.mockapi.io/api/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <button
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </button>
      {isOpen && <AddTask />}

      <TaskList />
    </div>
  );
};

export default Home;
