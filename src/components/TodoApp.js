import { useState } from "react";
import "./todoapp.css";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const AddTask = () => {
    // console.log(task)
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
      // saving the previous tasklist,and also the array of objects when the task is not empty
      setTask("");
    }
  };

  const deleteTask = (e, id) => {
    // e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
    // so here the ids that are not same will be filtered

    // the id that is same will be removed
  };

  const completeTask = (e, id) => {
    e.preventDefault();
    // find index of element
    const element = tasklist.findIndex((elem) => elem.id === id);

    //copy array into new variable to be used specifically as to which id containing array to be specifically changed

    const newTaskList = [...tasklist];

    //edit  element and changing a specific property of the specific id containing tasklist

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      <br />
      {/* when tasklist!==[] and it has multiple values then the value inside the tasks will be mapped */}
      {/* if array.length != 0 then the elements will be mapped,else they will not be mapped */}
      {tasklist.length ? (
        <ul>
          {tasklist.map((tasks, index) => (
            <li key={index} className={tasks.isCompleted ? "crossText" : null}>
              {tasks.value}
              <button
                className="completed"
                onClick={(e) => completeTask(e, tasks.id)}
              >
                Completed
              </button>

              <button
                className="delete"
                onClick={(e) => deleteTask(e, tasks.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoApp;
