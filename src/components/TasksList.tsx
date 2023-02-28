import styles from './TasksList.module.css'

import clipboard from '../assets/Clipboard.png'
import { Task } from './Task'
import { FormEvent, useState } from 'react';

interface TasksList {
  id: number;
  titleTask: string;
  isCompleted: boolean;
}

interface TaskProps {
  taskList: TasksList[];
  setTaskList: React.Dispatch<React.SetStateAction<Array<TasksList>>>;
}

export function TasksList( { taskList, setTaskList }: TaskProps ) {
  //filtro as tarefas concluídas para contabilizar no indicadores.
  const tasksCompleted = taskList.filter((obj) => {
    return obj.isCompleted === true;
  })

  return(
    <div className={styles.tasksContent}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <div>{taskList.length}</div>
        </div>

        <div className={styles.tasksCompleted}>
          <p>Concluídas</p>
          {taskList.length <= 0 ? <div>0</div> : <div>{tasksCompleted.length} de {taskList.length}</div>}
        </div>
      </header>

      <div className={styles.tasksListed} >
        {taskList.map(task => {
          console.log(taskList.length)
          if (taskList.length > 0){
            return (
              <Task 
              key={task.id}
              task={task}
              taskList={taskList}
              setTaskList={setTaskList}
              />
            )
          }
        })}
        {
          taskList.length <= 0 ?
            <div className={styles.containerInfoTasksEmpty}>
              <img src={clipboard} />
              <p className={styles.titleWarnningTasksEmpty}>Você ainda não tem tarefas cadastradas</p>
              <p className={styles.paragraphWarnningTasksEmpty}>Crie tarefas e organize seus itens a fazer</p>
            </div>
            : null
        }
            
                  
      </div>
    </div>
  )
}