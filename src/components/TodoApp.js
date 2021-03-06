import React, { useState } from "react";
import "./todoapp.css";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const AddTask = () => {
    // console.log(task)
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...taskList, taskDetails]);
      // saving the previous taskList,and also the array of objects when the task is not empty
      setTask("");
    }
  };

  const deleteTask = (e, id) => {
    // e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
    // so here the ids that are not same will be filtered

    // the ids' that are same will be removed
  };

  const completeTask = (e, id) => {
    e.preventDefault();
    // find index of element
    const element = taskList.findIndex((elem) => elem.id === id);

    //copy array into new variable to be used specifically as to which id containing array to be specifically changed

    const newTaskList = [...taskList];

    //edit  element and changing a specific property of the specific id containing taskList

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
      {/* when taskList!==[] and it has multiple values then the value inside the tasks will be mapped */}
      {/* if array.length !== 0 then the elements will be mapped,else they will not be mapped */}
      {taskList.length ? (
        <ul>
          {taskList.map((tasks, index) => (
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
