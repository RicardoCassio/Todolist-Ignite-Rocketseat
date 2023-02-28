import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

import './global.css'

export function App() {
  const [ taskList, setTaskList ] = useState([
    {
      id: 1,
      titleTask: 'Ser f@d@o no React',
      isCompleted: false,
    },
  ])
  return (
    <div>
      <Header />

      <main>
        <NewTask 
          taskList={taskList}
          setTaskList={setTaskList}
        />

        <TasksList 
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </main>
    </div>
  )
}
