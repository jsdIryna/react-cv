import { useRef, useState } from "react";
import uniqid from "uniqid";
import moment from "moment";

import { Wrapper } from "components/wrapper/wrapper";
import { Card } from "containers/projects/to-do-list/card/card";

import add from "assets/main-icons/add.png";

const TodoList = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const addCard = () => {
    const taskName = inputRef.current.value.trim();
    if (taskName === "") {
      return;
    }

    const currentDate = moment();
    const dateTime = currentDate.format("YYYY.MM.DD HH:mm");

    const newTask = {
      date: dateTime,
      taskName: inputRef.current.value,
      isChecked: false,
    };

    setData([...data, newTask]);
    inputRef.current.value = "";
  };

  const handleCheckboxChange = (name) => {
    const newData = data.map((el) => {
      if (el.taskName === name) el.isChecked = !el.isChecked;
      return el;
    });
    setData(newData);
  };

  const deleteCard = (name) => {
    setData(data.filter((el) => el.taskName !== name));
  };

  const checkedTasks = [];
  const uncheckedTasks = [];
  for (let el of data) {
    el.isChecked ? checkedTasks.push(el) : uncheckedTasks.push(el);
    console.log(el);
  }

  return (
    <Wrapper>
      <div className="flex justify-center mb-32">
        <div className="flex flex-col w-96 mt-10 rounded-xl border-2 border-sky-600 bg-white">
          <div className="flex items-center justify-center h-14 rounded-tl-lg rounded-tr-lg bg-custom-gradient">
            <h1 className="text-white text-base font-bold text-lg">
              Todo list
            </h1>
          </div>
          <div className="flex justify-between my-1.5">
            <div className="flex justify-center w-6/12">
              Left: {uncheckedTasks.length} tasks
            </div>
            <div className="flex justify-center w-6/12">
              Done: {checkedTasks.length} tasks
            </div>
          </div>
          <hr className="bg-gray-300 h-px border-0" />
          {data.length === 0 && (
            <div className="p-2 text-center">
              Welcome to your ToDo list!
              <br />
              Add your first todo item here.
            </div>
          )}
          {!!uncheckedTasks.length && (
            <div>
              {uncheckedTasks.map((el) => (
                <Card
                  key={uniqid()}
                  date={el.date}
                  name={el.taskName}
                  isChecked={el.isChecked}
                  deleteCard={deleteCard}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          )}
          {!!checkedTasks.length && (
            <div>
              {checkedTasks.map((el) => (
                <Card
                  key={uniqid()}
                  date={el.date}
                  name={el.taskName}
                  isChecked={el.isChecked}
                  deleteCard={deleteCard}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          )}
          <div className="flex items-center my-2 mx-2 full relative">
            <input
              ref={inputRef}
              className="border-solid border-2 border-cyan-400 rounded-lg py-1 w-full pl-2 pr-10"
            />
            <button
              onClick={addCard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <img src={add} alt="add" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TodoList;
