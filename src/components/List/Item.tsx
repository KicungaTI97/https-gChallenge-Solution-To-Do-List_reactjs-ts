import {Trash, Check} from "@phosphor-icons/react"

import style from './Item.module.css'
import { Itask } from "../../App"


interface Props{
  data: Itask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean}) =>void
}

export function Item({data, removeTask, toggleTaskStatus}: Props){

  function handleTaskToggle(){
    toggleTaskStatus({id: data.id, value: !data.isChecked})
  }

  function handleRemove(){
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
    ? style['checkbox-checked']
    : style['checkbox-unchecked']
  
  const paragraphCheckedclassname = data.isChecked
    ? style['paragraph-checked']
    : ""
  
  return(

  <div className={style.container}>
    <div>
      <label htmlFor="checkBox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" checked={data.isChecked} />
        <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
          {data.isChecked  && <Check size={20} />}
        </span>
        
        <p className={`${style.paragraph} ${paragraphCheckedclassname}`}>
          {data.text}
        </p>
      </label>
    </div>

    <button onClick={handleRemove}>
      <Trash size={20} color="#808080"/>
    </button>
  </div>
)
}