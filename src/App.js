import React, { useState } from 'react'
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [list, setList] = useState([])
  const addTask = (userInput) =>{
      if(userInput){
          const newItem = {
              id: Math.random().toString(36).substr(2,9),
              task: userInput,
              complete: false
          }
          setList(...list, newItem)
      }
  }
  const removeTask = () =>{
  }
  const handleToggle = () =>{
  }
    return (
        <div className="App">
            <header>
                <h1>Список задач: {list.length}</h1>
            </header>
            <ToDoForm addTask={addTask} />
            {list.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
    </div>
  );
}

export default App;
