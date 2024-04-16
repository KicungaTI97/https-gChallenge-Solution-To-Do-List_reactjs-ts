import style from './InputTask.module.css'

export function InputTask({ ...rest }: React.DetailedHTMLProps<HTMLInputElement>,
  HTMLInputElement
){
    return( 
      <input
      className={style.container}
      type="text"
      placeholder='Adicione nova tarefa'
      {...rest}
      />
  
    ) 
}