import style from './Header.module.css'

interface Props{
  tasksCounter: number
  checkedTasksCounter: number
}


export function Header({tasksCounter, checkedTasksCounter}: Props){
  return(
    <header className={style.container}>
      <aside>
        <p>Tarefa Criada</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`
          }
        </span>
      </aside>
    </header>
  )
}