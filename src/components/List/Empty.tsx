
import style from './Empty.module.css'

import ClipboardLogo from '../../assets/Clipboard.svg'


export function Empty(){


  return(

  <div className={style.container}>
    <img src={ClipboardLogo} alt="" />
   <p>
    <strong>Você ainda não tem tarefas cadastradas</strong>
       Crie tarefas e organize seus itens a fazer
   </p>
  </div>

  )
}