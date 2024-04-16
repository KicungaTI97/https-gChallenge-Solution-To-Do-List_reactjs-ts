
import { useState, FormEvent, ChangeEvent } from "react"

import { PlusCircle } from '@phosphor-icons/react'

import "./global.css"
import style from "./App.module.css"

import { Header } from "./components/Header"
import { InputTask } from './components/InputTask'
import { Button } from "./components/Button"
import { Empty } from "./components/List/Empty"
import { Header as ListHeader} from "./components/List/Header"
import { Item } from "./components/List/Item"

export interface Itask{
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [inputValue, setInputValue] = useState('')


 const checkedTasksCounter = tasks.reduce((prevValue, currentTask) =>{
    if(currentTask.isChecked){
      return prevValue + 1
    }
   return prevValue
  }, 0) 
 

  function handleAddTask(event:FormEvent) {
    event.preventDefault()
    if(!inputValue){
      return
    }
 
    const newTask:Itask = {
      id:new Date().getTime(),
      text: inputValue,
      isChecked: false,
    } 

    setTasks((state) => [...state, newTask])
    setInputValue("")
  }

  function handleRemoveTask(id: number){
    const filteredTask = tasks.filter((task)=>task.id !== id)
    console.log(filteredTask)
    if(!confirm("Deseja mesmo apagar essa tarefa?")){
      return
    }

    setTasks(filteredTask)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean}){
    const updateTask = tasks.map((task) =>{
      if(task.id === id){
        return {...task, isChecked: value}
      }
      return {...task}
    })

    setTasks(updateTask)
  } 
 

  return (

    <form onSubmit={handleAddTask}>
      <Header />

    <section className={style.content}>
      <div className={style.taskInfoContainer}>
        <InputTask
        onChange={(event:ChangeEvent<HTMLTextAreaElement>) =>setInputValue(event.target.value)}
        value={inputValue}
        />
        <Button >
        Criar
        <PlusCircle size={16} color='#f2f2f2' weight='bold'/>
        </Button>
      </div>

      <div className = {style.tasksList}>
        <ListHeader 
        tasksCounter = {tasks.length}
        checkedTasksCounter = {checkedTasksCounter} 
        />

        {tasks.length > 0 ? 
          (
              <div>

              {tasks.map((task) => (
                <Item 
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
            />
           ))}
           </div>
          ) : (
          <Empty />
        )}  


      </div>
    </section>
    </form>
  
  )
}

export default App

