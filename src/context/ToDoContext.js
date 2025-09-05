import { createContext, useContext } from "react";
export const ToDoContext = createContext({
  todos: [],
  addToDo: (inputtodovalue) => {},
  updateToDo: (todoid,updatetodoobj) => {},
  deleteToDo: (todoid) => {},
  todoComplete: (todoid) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const UseToDO = () => {
  return useContext(ToDoContext);
};
