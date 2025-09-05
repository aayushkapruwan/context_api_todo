import { useState } from "react";
import { UseToDO } from "../context/ToDoContext";
function TodoItem({ todo }) {
  const { updateToDo, deleteToDo, todoComplete } = UseToDO();
  const [todovalue, settodovalue] = useState(todo.todoobjectvalue);
  const [iseditable, setiseditable] = useState(false);
  return (
    <div className="min-h-10 w-full bg-amber-200 rounded-xl my-2 flex justify-between px-3 py-2 items-center shadow-sm">
      <input
        type="checkbox"
        value={todo.completed}
        onChange={() => {
          todoComplete(todo.id);
        }}
        name=""
        id=""
      ></input>
      <input
        type="text"
        name=""
        value={todovalue}
        onChange={(e) => {
          settodovalue(e.target.value);
        }}
        readOnly={!iseditable}
        className={` ip w-2/3 text-black rounded-lg px-2 ${
          iseditable
            ? "border border-blue-500  focus:border-blue-500  focus:outline-none"
            : "border-transparent outline-none focus:outline-none focus:border-transparent"
        }
        ${todo.completed ? "line-through text-gray-500" : ""}
        `}
        placeholder="Todo Here"
        id=""
      />

      <button
        onClick={() => {
          setiseditable((prev) => !prev);
        }}
      >
        <div className={`${iseditable ? "hidden" : "inline-block"}`}>
          <i className={`text-black fa-solid fa-pencil`}></i>
        </div>
        <div
          className={` ${iseditable ? "inline-block" : "hidden"}`}
          onClick={() => {
            if (todovalue) {
              updateToDo(todo.id, { ...todo, todoobjectvalue: todovalue });
            }
          }}
        >
          <i className={` text-black fa-solid fa-floppy-disk`}></i>
        </div>
      </button>
      <button
        onClick={() => {
          deleteToDo(todo.id);
        }}
      >
        <i className="fa-solid fa-xmark text-red-800"></i>
      </button>
    </div>
  );
}
export default TodoItem;
