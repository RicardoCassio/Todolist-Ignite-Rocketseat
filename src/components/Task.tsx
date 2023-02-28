import { Trash } from 'phosphor-react'

import styles from './Task.module.css'
import { useState } from 'react';

interface Task {
  id: number;
  titleTask: string;
  isCompleted: boolean;
}

interface TasksList {
  id: number;
  titleTask: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
  taskList: TasksList[];
  setTaskList: React.Dispatch<React.SetStateAction<Array<TasksList>>>;
}

export function Task({ task, taskList, setTaskList }:TaskProps) {  
  function teste(){
    const tempTasks = [...taskList];
  
    const taskIndex = tempTasks.indexOf(task)

    tempTasks[taskIndex].isCompleted = !tempTasks[taskIndex].isCompleted;


    setTaskList(tempTasks)
  }

function handleDeleteTask(){
  const tasksWithoutDeleteOne = taskList.filter(tasks => {
    return tasks !== task;
  })

  setTaskList(tasksWithoutDeleteOne)
}

  return (
    <div className={styles.taskContainer}>
      <div>
        <input 
          className={styles.taskChecked} 
          type='checkbox' 
          onChange={teste}
        />
        {!task.isCompleted 
          ? <p>{task.titleTask}</p> 
          : <p className={styles.textTaskCompleted}>{task.titleTask}</p>
        }
      </div>
      
      <button onClick={handleDeleteTask} title='Deletar Tarefa'>
        <Trash size={20} />
      </button>

    </div>
  )
}