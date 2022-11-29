import styles from "./Nav.module.css"
export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.navItem}>/</a>
      <a className={`${styles.navItem} ${styles["navItem-active"]}`}>/ Docs</a>
    </nav>
  )
}
