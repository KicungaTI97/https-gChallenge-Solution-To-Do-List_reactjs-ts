
import style from './Header.module.css'
import rocketlogo from '../assets/rocket.svg'

export function Header(){

  return(
    <header className={style.header}>
      <logo>
      <img src={rocketlogo} alt="logo" />
      <div><span className={style.to}>to</span><span className={style.do}>do</span></div>
      </logo>
    </header>
  )
}