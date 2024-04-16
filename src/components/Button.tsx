import style from './Button.module.css'

export function Button({children, ...rest}){
    return(
      <button className={style.button} {...rest}>{children} </button>
    )
}