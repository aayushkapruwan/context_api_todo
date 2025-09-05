import React, { useState, useEffect } from "react";
import TodoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import { ToDoProvider } from "./context/ToDoContext";

function App() {
  const [todos, settodos] = useState([]);
  const addToDo = (todovalue) => {
    settodos((prev) => [
      { id: Date.now(), todoobjectvalue: todovalue, completed: false },
      ...prev,
    ]);
  };
  const updateToDo = (todoid, updatetodoobj) => {
    settodos((prev) =>
      prev.map((obj) => (obj.id !== todoid ? obj : { ...updatetodoobj }))
    );
  };
  const deleteToDo = (todoid) => {
    settodos((prev) => prev.filter((obj) => obj.id !== todoid));
  };
  const todoComplete = (todoid) => {
    settodos((prev) =>
      prev.map((obj) =>
        obj.id !== todoid ? obj : { ...obj, completed: !obj.completed }
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addToDo, updateToDo, deleteToDo, todoComplete }}
    >
      <div className="bg-[url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg')] bg-cover bg-center bg-no-repeat min-h-screen py-8">
        <div className="w-full bg-[black]/80 max-w-2xl mx-auto shadow-lg rounded-2xl px-5 py-5 text-white">
          <h1 className="text-2xl font-bold text-center mb-6 mt-1">
            Add Your Notes Here!
          </h1>
          <div className="mb-5">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((obj) => {
              return (
                <div className="w-full" key={obj.id}>
                  <ToDoItem todo={obj} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
