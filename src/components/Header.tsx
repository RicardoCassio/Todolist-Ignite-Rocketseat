import styles from './Header.module.css'

import todolistLogo from '../assets/Logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todolistLogo} alt='Logotipo TodoList'/>      
    </header>
  )
}