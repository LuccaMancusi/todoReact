import React, { useEffect, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { AiFillDelete } from "react-icons/ai";

function Input() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function handleTask(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    if (task === "") {
      alert("Digite alguma tarefa!");
    } else {
      setList([...list, task]);
    }
  }

  function deleteTask(id, e) {
    var newList = [...list];
    newList.splice(id, 1);
    setList([...newList]);
  }

  useEffect(() => {
    setTask("");
  }, [list]);

  return (
    <>
      <label for="input">Qual tarefa quer adicionar?</label>
      <input
        value={task}
        onChange={handleTask}
        name="input"
        id="input"
        type="text"
        placeholder="Coloque sua tarefa aqui"
      ></input>
      <button onClick={handleClick}>Adicionar</button>
      <div className="taskList">
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <ToggleButton></ToggleButton>
                <p>{item}</p>
                <AiFillDelete
                  className="deleteButton"
                  onClick={(e) => deleteTask(index, e)}
                ></AiFillDelete>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Input;
