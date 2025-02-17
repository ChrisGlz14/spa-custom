import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

 const Header = () => {

   


  return (

    <header className={styles.header}>
        <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.nav_link_active}` : styles.nav_link}>Inicio</NavLink>
            <NavLink to="/sobre-nosotros" className={({ isActive}) => isActive ? `${styles.nav_link} ${styles.nav_link_active}` : styles.nav_link}>Sobre Nosotros</NavLink>
            <NavLink to="/nuestros-trabajos" className={({ isActive}) => isActive ? `${styles.nav_link} ${styles.nav_link_active}` : styles.nav_link}>Nuestros Trabajos</NavLink>
        </nav>
    </header>
  )
}
export default Header