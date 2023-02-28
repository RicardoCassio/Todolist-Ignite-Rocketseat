import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import { TasksList } from './TasksList'

interface TasksList {
  id: number;
  titleTask: string;
  isCompleted: boolean;
}

interface NewTaskProps {
  taskList: TasksList[];
  setTaskList: React.Dispatch<React.SetStateAction<Array<TasksList>>>;
}

export function NewTask({ taskList, setTaskList }: NewTaskProps) {
  const [ newTaskTitle, setNewTaskTitle ] = useState('')
  
  function handleCreateNewTask(event:FormEvent) {
    event.preventDefault()

    setTaskList([...taskList, {
      id: taskList.length + 1,
      titleTask: newTaskTitle,
      isCompleted: false
    }])

    setNewTaskTitle('')
  }

  function handleNewTaskChange(event:FormEvent) {
    setNewTaskTitle(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <input 
          placeholder='Adicione uma nova tarefa'
          className={styles.taskNameInput}
          value={newTaskTitle}
          required
          onChange={handleNewTaskChange}
          name='titleTask'
        />

        <footer>
          <button type='submit'>
            Criar
            <PlusCircle size={16}/>
          </button>
        </footer>
      </form>
      
    </div>
  )
}