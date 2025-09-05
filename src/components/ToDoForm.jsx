import { useState } from "react";
import { UseToDO } from "../context/ToDoContext";
function TodoForm() {
    const {addToDo}=UseToDO()
    const [inputedtodovalue,setinputedtodovalue]=useState('')
  return (
      <form onSubmit={(e)=>{
        e.preventDefault()
        if(!inputedtodovalue){
            return
        }
        else{
            addToDo(inputedtodovalue)
        }
      }} className="flex">
          <input
              type="text"
              value={inputedtodovalue}
              onChange={(e)=>{
                setinputedtodovalue(e.target.value)
              }}
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-xl px-4 outline-none duration-150 bg-white/20 py-2.5"
          />
          <button type="submit" className="rounded-r-xl px-4 py-2.5 bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-medium shrink-0 transition-colors">
              Add
          </button>
      </form>
  );
}

export default TodoForm;